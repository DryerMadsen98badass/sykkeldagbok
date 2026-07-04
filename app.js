const STORE_KEY = "sykkeldagbok.v1";

const starterFoods = [
  ["Kokt egg", 155, 1.1, 13, 11, 0.31],
  ["Stekt egg", 196, 0.8, 14, 15, 0.42],
  ["Omelett", 154, 1.9, 11, 12, 0.4],
  ["Grovbrød", 240, 41, 9, 3.5, 1.1],
  ["Knekkebrød", 350, 62, 11, 3, 1.2],
  ["Havregryn", 370, 60, 13, 7, 0.02],
  ["Ris kokt", 130, 28, 2.7, 0.3, 0.01],
  ["Pasta kokt", 158, 31, 5.8, 0.9, 0.01],
  ["Potet kokt", 80, 17, 1.9, 0.1, 0.01],
  ["Kyllingfilet", 110, 0, 23, 1.5, 0.2],
  ["Kjøttdeig 14%", 220, 0, 18, 16, 0.2],
  ["Laks", 208, 0, 20, 13, 0.15],
  ["Tunfisk i vann", 110, 0, 25, 1, 0.8],
  ["Melk lett", 42, 4.7, 3.4, 1, 0.1],
  ["Yoghurt naturell", 63, 5.2, 4.5, 3, 0.1],
  ["Cottage cheese", 96, 1.5, 13, 4.3, 0.8],
  ["Banan", 89, 23, 1.1, 0.3, 0.01],
  ["Eple", 52, 14, 0.3, 0.2, 0.01],
  ["Rosiner", 299, 79, 3.1, 0.5, 0.03],
  ["Ketchup", 105, 24, 1.3, 0.1, 1.8],
  ["Syltetøy", 250, 60, 0.4, 0.1, 0.02],
  ["Honning", 304, 82, 0.3, 0, 0.01],
  ["Peanøttsmør", 588, 20, 25, 50, 1.2],
  ["Olivenolje", 884, 0, 0, 100, 0],
  ["Sportsdrikk", 32, 8, 0, 0, 0.25],
  ["Energigel", 280, 70, 0, 0, 0.2],
  ["Energibar", 390, 60, 8, 10, 0.4],
].map(([name, kcal, carbs, protein, fat, salt]) => ({
  id: crypto.randomUUID(),
  name,
  kcalPer100g: kcal,
  carbsPer100g: carbs,
  proteinPer100g: protein,
  fatPer100g: fat,
  saltPer100g: salt,
  source: "startliste",
  isFavorite: ["Kokt egg", "Grovbrød", "Havregryn", "Banan", "Sportsdrikk"].includes(name),
  lastUsedAt: "",
  updatedAt: new Date().toISOString(),
}));

const defaultState = {
  version: 1,
  blocks: [],
  entries: [],
  foods: starterFoods,
  mealTemplates: [],
  lastExportedAt: "",
};

let state = loadState();
let activeBlockType = "feeling";
let deferredInstallPrompt = null;

const blockDefinitions = {
  feeling: {
    title: "Følelse",
    hint: "Tallene brukes i grafer.",
    fields: [
      ["feeling", "Dagsfølelse 1-10", "number", 1, 10],
      ["energy", "Energi 1-10", "number", 1, 10],
      ["mood", "Humør 1-10", "number", 1, 10],
      ["stress", "Stress 1-10", "number", 1, 10],
      ["recovery", "Restitusjon 1-10", "number", 1, 10],
    ],
  },
  body: {
    title: "Kropp",
    hint: "Vekt og kroppstall.",
    fields: [
      ["weightKg", "Vekt kg", "number", 0, 300],
      ["soreness", "Muskelømhet 1-10", "number", 1, 10],
      ["restingHr", "Hvilepuls", "number", 0, 230],
    ],
  },
  sleep: {
    title: "Søvn",
    hint: "Søvn og kvalitet.",
    fields: [
      ["sleepHours", "Søvntimer", "number", 0, 16],
      ["sleepQuality", "Søvnkvalitet 1-10", "number", 1, 10],
    ],
  },
  fluid: {
    title: "Væske",
    hint: "Registrer milliliter.",
    fields: [
      ["fluidMl", "Væske ml", "number", 0, 10000],
      ["carbs", "Karbo i drikke gram", "number", 0, 500],
    ],
  },
  ride: {
    title: "Sykkel",
    hint: "Trening eller ritt.",
    fields: [
      ["rideMinutes", "Varighet minutter", "number", 0, 1000],
      ["distanceKm", "Distanse km", "number", 0, 1000],
      ["intensity", "Intensitet 1-10", "number", 1, 10],
      ["elevationM", "Høydemeter", "number", 0, 10000],
    ],
  },
  note: {
    title: "Notat",
    hint: "Notat påvirker ikke grafene.",
    fields: [["note", "Fritekst", "textarea"]],
  },
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      foods: parsed.foods?.length ? parsed.foods : starterFoods,
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
  renderAll();
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function byDate(a, b) {
  return b.date.localeCompare(a.date);
}

function numberValue(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function activeDate() {
  return document.querySelector("#activeDate").value || today();
}

function getBlocksForDate(date) {
  return state.blocks.filter((block) => block.entryDate === date && !block.convertedToEntry);
}

function fieldHtml([name, label, type, min, max]) {
  if (type === "textarea") {
    return `<label>${label}<textarea name="${name}" rows="4"></textarea></label>`;
  }
  return `<label>${label}<input name="${name}" type="${type}" min="${min ?? ""}" max="${max ?? ""}" step="0.1" /></label>`;
}

function renderBlockForm() {
  const definition = blockDefinitions[activeBlockType];
  document.querySelector("#blockTitle").textContent = definition.title;
  document.querySelector("#blockHint").textContent = definition.hint;

  if (activeBlockType === "meal") {
    renderMealForm();
    return;
  }

  document.querySelector("#blockFields").innerHTML = definition.fields.map(fieldHtml).join("");
}

function renderMealForm() {
  document.querySelector("#blockTitle").textContent = "Måltid";
  document.querySelector("#blockHint").textContent = "Velg matvarer og gram. Makroer regnes ut automatisk.";
  document.querySelector("#blockFields").innerHTML = `
    <label>Måltidstype
      <select name="mealType">
        <option>Frokost</option>
        <option>Lunsj</option>
        <option>Middag</option>
        <option>Kveldsmat</option>
        <option>Snack</option>
        <option>Før økt</option>
        <option>Under økt</option>
        <option>Etter økt</option>
      </select>
    </label>
    <div class="meal-picker">
      <div class="meal-row">
        <input id="mealFoodSearch" type="search" placeholder="Søk matvare" list="foodOptions" />
        <input id="mealFoodGrams" type="number" min="0" step="1" placeholder="Gram" />
        <button id="addMealFoodButton" class="secondary-button" type="button">Legg til</button>
      </div>
      <datalist id="foodOptions">${state.foods.map((food) => `<option value="${escapeHtml(food.name)}"></option>`).join("")}</datalist>
      <div id="selectedMealFoods" class="item-list"></div>
    </div>
  `;

  document.querySelector("#addMealFoodButton").addEventListener("click", addFoodToMealDraft);
}

let mealDraft = [];

function addFoodToMealDraft() {
  const name = document.querySelector("#mealFoodSearch").value.trim();
  const grams = numberValue(document.querySelector("#mealFoodGrams").value);
  const food = state.foods.find((item) => item.name.toLowerCase() === name.toLowerCase());
  if (!food || grams <= 0) return;
  mealDraft.push({ foodId: food.id, foodName: food.name, grams });
  document.querySelector("#mealFoodSearch").value = "";
  document.querySelector("#mealFoodGrams").value = "";
  renderMealDraft();
}

function renderMealDraft() {
  const target = document.querySelector("#selectedMealFoods");
  if (!target) return;
  target.innerHTML = mealDraft
    .map((item, index) => {
      const macros = calculateFoodMacros(item);
      return `
        <article class="item">
          <div>
            <h3>${escapeHtml(item.foodName)} · ${item.grams} g</h3>
            <p class="meta">
              <span>${Math.round(macros.kcal)} kcal</span>
              <span>${macros.carbs.toFixed(1)} g karbo</span>
              <span>${macros.protein.toFixed(1)} g protein</span>
              <span>${macros.fat.toFixed(1)} g fett</span>
            </p>
          </div>
          <button class="danger-button" type="button" data-meal-index="${index}">Fjern</button>
        </article>
      `;
    })
    .join("");

  target.querySelectorAll("[data-meal-index]").forEach((button) => {
    button.addEventListener("click", () => {
      mealDraft.splice(Number(button.dataset.mealIndex), 1);
      renderMealDraft();
    });
  });
}

function calculateFoodMacros(item) {
  const food = state.foods.find((foodItem) => foodItem.id === item.foodId);
  if (!food) return { kcal: 0, carbs: 0, protein: 0, fat: 0, salt: 0 };
  const factor = item.grams / 100;
  return {
    kcal: food.kcalPer100g * factor,
    carbs: food.carbsPer100g * factor,
    protein: food.proteinPer100g * factor,
    fat: food.fatPer100g * factor,
    salt: food.saltPer100g * factor,
  };
}

function sumMacros(items) {
  return items.reduce(
    (sum, item) => {
      const macros = calculateFoodMacros(item);
      sum.kcal += macros.kcal;
      sum.carbs += macros.carbs;
      sum.protein += macros.protein;
      sum.fat += macros.fat;
      sum.salt += macros.salt;
      return sum;
    },
    { kcal: 0, carbs: 0, protein: 0, fat: 0, salt: 0 }
  );
}

function createBlock(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const payload = {};

  if (activeBlockType === "meal") {
    payload.mealType = data.get("mealType");
    payload.items = mealDraft;
    payload.totals = sumMacros(mealDraft);
    mealDraft.forEach((item) => {
      const food = state.foods.find((foodItem) => foodItem.id === item.foodId);
      if (food) food.lastUsedAt = new Date().toISOString();
    });
    mealDraft = [];
  } else {
    for (const [key, value] of data.entries()) {
      payload[key] = key === "note" ? String(value) : numberValue(value);
    }
  }

  state.blocks.push({
    blockId: crypto.randomUUID(),
    entryDate: activeDate(),
    blockType: activeBlockType,
    createdAt: new Date().toISOString(),
    payload,
    convertedToEntry: false,
    exportedAt: "",
  });

  event.currentTarget.reset();
  renderBlockForm();
  saveState();
}

function finalizeDay() {
  const date = activeDate();
  const blocks = getBlocksForDate(date);
  if (!blocks.length) return;
  const existingIndex = state.entries.findIndex((entry) => entry.date === date);
  const entry = buildEntryFromBlocks(date, blocks);

  if (existingIndex >= 0) {
    state.entries[existingIndex] = {
      ...state.entries[existingIndex],
      ...entry,
      updatedAt: new Date().toISOString(),
      exportedAt: "",
    };
  } else {
    state.entries.push(entry);
  }

  blocks.forEach((block) => {
    block.convertedToEntry = true;
  });
  saveState();
  showView("historyView");
}

function buildEntryFromBlocks(date, blocks) {
  const entry = {
    id: crypto.randomUUID(),
    date,
    feeling: 0,
    energy: 0,
    mood: 0,
    stress: 0,
    recovery: 0,
    weightKg: 0,
    soreness: 0,
    sleepHours: 0,
    sleepQuality: 0,
    fluidMl: 0,
    rideMinutes: 0,
    distanceKm: 0,
    intensity: 0,
    kcal: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    notes: "",
    blockIds: blocks.map((block) => block.blockId),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    exportedAt: "",
  };

  blocks.forEach((block) => {
    const payload = block.payload;
    Object.keys(entry).forEach((key) => {
      if (typeof entry[key] === "number" && typeof payload[key] === "number") {
        entry[key] = payload[key];
      }
    });

    if (block.blockType === "fluid") {
      entry.fluidMl += payload.fluidMl || 0;
      entry.carbs += payload.carbs || 0;
    }

    if (block.blockType === "meal") {
      entry.kcal += payload.totals?.kcal || 0;
      entry.carbs += payload.totals?.carbs || 0;
      entry.protein += payload.totals?.protein || 0;
      entry.fat += payload.totals?.fat || 0;
    }

    if (block.blockType === "note" && payload.note) {
      entry.notes = entry.notes ? `${entry.notes}\n${payload.note}` : payload.note;
    }
  });

  return entry;
}

function renderTodayBlocks() {
  const blocks = getBlocksForDate(activeDate());
  const target = document.querySelector("#todayBlocks");
  target.innerHTML = blocks.length
    ? blocks.map(renderBlockItem).join("")
    : `<p class="empty">Ingen blokker for valgt dato.</p>`;

  target.querySelectorAll("[data-delete-block]").forEach((button) => {
    button.addEventListener("click", () => {
      state.blocks = state.blocks.filter((block) => block.blockId !== button.dataset.deleteBlock);
      saveState();
    });
  });
}

function renderBlockItem(block) {
  const title = blockDefinitions[block.blockType]?.title || block.blockType;
  const summary = summarizePayload(block);
  return `
    <article class="item">
      <div>
        <h3>${title}</h3>
        <p class="meta">${summary}</p>
      </div>
      <button class="danger-button" data-delete-block="${block.blockId}">Slett</button>
    </article>
  `;
}

function summarizePayload(block) {
  if (block.blockType === "meal") {
    const totals = block.payload.totals || {};
    return `<span>${block.payload.mealType}</span><span>${Math.round(totals.kcal || 0)} kcal</span><span>${(totals.carbs || 0).toFixed(1)} g karbo</span>`;
  }
  return Object.entries(block.payload)
    .filter(([, value]) => value !== "" && value !== 0)
    .map(([key, value]) => `<span>${key}: ${escapeHtml(String(value))}</span>`)
    .join("");
}

function renderFoods() {
  const query = document.querySelector("#foodSearch").value.trim().toLowerCase();
  const foods = state.foods
    .filter((food) => !query || food.name.toLowerCase().includes(query))
    .sort((a, b) => Number(b.isFavorite) - Number(a.isFavorite) || a.name.localeCompare(b.name, "no"));

  document.querySelector("#foodsList").innerHTML = foods
    .map(
      (food) => `
      <article class="food-item">
        <div>
          <h3>${food.isFavorite ? "★ " : ""}${escapeHtml(food.name)}</h3>
          <p class="meta">
            <span>${food.kcalPer100g} kcal</span>
            <span>${food.carbsPer100g} C</span>
            <span>${food.proteinPer100g} P</span>
            <span>${food.fatPer100g} F</span>
            <span>${food.source}</span>
          </p>
        </div>
        <div>
          <button class="secondary-button" data-edit-food="${food.id}">Rediger</button>
        </div>
      </article>
    `
    )
    .join("");

  document.querySelectorAll("[data-edit-food]").forEach((button) => {
    button.addEventListener("click", () => editFood(button.dataset.editFood));
  });
}

function editFood(id) {
  const food = state.foods.find((item) => item.id === id);
  if (!food) return;
  document.querySelector("#foodForm").hidden = false;
  document.querySelector("#foodFormTitle").textContent = "Rediger matvare";
  document.querySelector("#foodId").value = food.id;
  document.querySelector("#foodName").value = food.name;
  document.querySelector("#foodKcal").value = food.kcalPer100g;
  document.querySelector("#foodCarbs").value = food.carbsPer100g;
  document.querySelector("#foodProtein").value = food.proteinPer100g;
  document.querySelector("#foodFat").value = food.fatPer100g;
  document.querySelector("#foodSalt").value = food.saltPer100g;
}

function saveFood(event) {
  event.preventDefault();
  const id = document.querySelector("#foodId").value || crypto.randomUUID();
  const food = {
    id,
    name: document.querySelector("#foodName").value.trim(),
    kcalPer100g: numberValue(document.querySelector("#foodKcal").value),
    carbsPer100g: numberValue(document.querySelector("#foodCarbs").value),
    proteinPer100g: numberValue(document.querySelector("#foodProtein").value),
    fatPer100g: numberValue(document.querySelector("#foodFat").value),
    saltPer100g: numberValue(document.querySelector("#foodSalt").value),
    source: document.querySelector("#foodId").value ? "redigert" : "brukerlaget",
    isFavorite: false,
    lastUsedAt: "",
    updatedAt: new Date().toISOString(),
  };

  const existingIndex = state.foods.findIndex((item) => item.id === id);
  if (existingIndex >= 0) state.foods[existingIndex] = { ...state.foods[existingIndex], ...food };
  else state.foods.push(food);

  closeFoodForm();
  saveState();
}

function closeFoodForm() {
  document.querySelector("#foodForm").hidden = true;
  document.querySelector("#foodForm").reset();
  document.querySelector("#foodId").value = "";
}

function renderEntries() {
  const entries = [...state.entries].sort(byDate);
  document.querySelector("#entriesList").innerHTML = entries.length
    ? entries.map(renderEntry).join("")
    : `<p class="empty">Ingen lagrede dager ennå.</p>`;

  document.querySelectorAll("[data-delete-entry]").forEach((button) => {
    button.addEventListener("click", () => {
      state.entries = state.entries.filter((entry) => entry.id !== button.dataset.deleteEntry);
      saveState();
    });
  });
}

function renderEntry(entry) {
  return `
    <article class="item">
      <div>
        <h3>${entry.date}</h3>
        <p class="meta">
          <span>${Math.round(entry.kcal)} kcal</span>
          <span>${entry.carbs.toFixed(1)} g karbo</span>
          <span>${entry.weightKg || "-"} kg</span>
          <span>${entry.feeling || "-"} følelse</span>
          <span>${entry.exportedAt ? "eksportert" : "ikke eksportert"}</span>
        </p>
      </div>
      <button class="danger-button" data-delete-entry="${entry.id}">Slett</button>
    </article>
  `;
}

function renderStats() {
  const pending = state.entries.filter((entry) => !entry.exportedAt).length;
  const bytes = new Blob([JSON.stringify(state)]).size;
  document.querySelector("#dayCount").textContent = state.entries.length;
  document.querySelector("#pendingCount").textContent = pending;
  document.querySelector("#storageUse").textContent = formatBytes(bytes);
}

function renderChart() {
  const metric = document.querySelector("#graphMetric").value;
  const entries = [...state.entries].sort((a, b) => a.date.localeCompare(b.date));
  const values = entries.map((entry) => ({ date: entry.date, value: Number(entry[metric]) || 0 })).filter((item) => item.value > 0);
  const svg = document.querySelector("#chart");
  const empty = document.querySelector("#chartEmpty");
  svg.innerHTML = "";
  empty.hidden = values.length > 1;
  if (values.length <= 1) return;

  const width = 680;
  const height = 260;
  const pad = 36;
  const max = Math.max(...values.map((item) => item.value));
  const min = Math.min(...values.map((item) => item.value));
  const range = max - min || 1;
  const points = values.map((item, index) => {
    const x = pad + (index / (values.length - 1)) * (width - pad * 2);
    const y = height - pad - ((item.value - min) / range) * (height - pad * 2);
    return { ...item, x, y };
  });

  const line = points.map((point) => `${point.x},${point.y}`).join(" ");
  svg.innerHTML = `
    <line x1="${pad}" y1="${height - pad}" x2="${width - pad}" y2="${height - pad}" stroke="#dce3da" />
    <line x1="${pad}" y1="${pad}" x2="${pad}" y2="${height - pad}" stroke="#dce3da" />
    <polyline points="${line}" fill="none" stroke="#18704f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    ${points.map((point) => `<circle cx="${point.x}" cy="${point.y}" r="5" fill="#285e8f"><title>${point.date}: ${point.value}</title></circle>`).join("")}
    <text x="${pad}" y="24" fill="#657267" font-size="14">Maks ${max.toFixed(1)}</text>
    <text x="${pad}" y="${height - 8}" fill="#657267" font-size="14">Min ${min.toFixed(1)}</text>
  `;
}

function exportData() {
  const now = new Date().toISOString();
  const payload = {
    exportId: crypto.randomUUID(),
    createdAt: now,
    deviceName: navigator.userAgent,
    appVersion: "1.0.0",
    entries: state.entries.filter((entry) => !entry.exportedAt),
    blocks: state.blocks.filter((block) => !block.exportedAt),
    foods: state.foods.filter((food) => food.source !== "startliste" || food.lastUsedAt),
    mealTemplates: state.mealTemplates,
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `sykkeldagbok-export-${today()}.json`;
  link.click();
  URL.revokeObjectURL(url);

  state.lastExportedAt = now;
  state.entries = state.entries.map((entry) => (entry.exportedAt ? entry : { ...entry, exportedAt: now }));
  state.blocks = state.blocks.map((block) => (block.exportedAt ? block : { ...block, exportedAt: now }));
  saveState();
}

function resetExportedEntries() {
  state.entries = state.entries.filter((entry) => !entry.exportedAt);
  state.blocks = state.blocks.filter((block) => !block.exportedAt);
  saveState();
}

async function importData(file) {
  const text = await file.text();
  const payload = JSON.parse(text);
  const entryIds = new Set(state.entries.map((entry) => entry.id));
  const blockIds = new Set(state.blocks.map((block) => block.blockId));
  const foodNames = new Set(state.foods.map((food) => food.name.toLowerCase()));

  (payload.entries || []).forEach((entry) => {
    if (!entryIds.has(entry.id)) state.entries.push(entry);
  });
  (payload.blocks || []).forEach((block) => {
    if (!blockIds.has(block.blockId)) state.blocks.push(block);
  });
  (payload.foods || []).forEach((food) => {
    if (!foodNames.has(food.name.toLowerCase())) state.foods.push(food);
  });
  saveState();
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active-view"));
  document.querySelector(`#${viewId}`).classList.add("active-view");
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === viewId));
  renderAll();
}

function renderAll() {
  renderTodayBlocks();
  renderFoods();
  renderEntries();
  renderStats();
  renderChart();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function init() {
  document.querySelector("#activeDate").value = today();
  renderBlockForm();
  renderAll();

  document.querySelector("#blockForm").addEventListener("submit", createBlock);
  document.querySelector("#finalizeDayButton").addEventListener("click", finalizeDay);
  document.querySelector("#activeDate").addEventListener("change", renderTodayBlocks);
  document.querySelector("#foodSearch").addEventListener("input", renderFoods);
  document.querySelector("#foodForm").addEventListener("submit", saveFood);
  document.querySelector("#newFoodButton").addEventListener("click", () => {
    document.querySelector("#foodFormTitle").textContent = "Ny matvare";
    document.querySelector("#foodForm").hidden = false;
  });
  document.querySelector("#cancelFoodButton").addEventListener("click", closeFoodForm);
  document.querySelector("#graphMetric").addEventListener("change", renderChart);
  document.querySelector("#exportButton").addEventListener("click", exportData);
  document.querySelector("#resetPhoneButton").addEventListener("click", resetExportedEntries);
  document.querySelector("#importButton").addEventListener("click", () => document.querySelector("#importFile").click());
  document.querySelector("#importFile").addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (file) importData(file);
  });

  document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => showView(tab.dataset.view)));
  document.querySelectorAll("[data-block]").forEach((button) => {
    button.addEventListener("click", () => {
      activeBlockType = button.dataset.block;
      mealDraft = [];
      renderBlockForm();
    });
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    document.querySelector("#installButton").hidden = false;
  });

  document.querySelector("#installButton").addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    deferredInstallPrompt = null;
    document.querySelector("#installButton").hidden = true;
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }
}

init();
