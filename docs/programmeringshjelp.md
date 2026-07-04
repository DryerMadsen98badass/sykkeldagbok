# Programmeringshjelp

Dette dokumentet skal oppdateres mens vi programmerer, slik at neste økt raskt kan forstå prosjektet.

## Arbeidsregel

- Les `docs/idea.md`, `docs/todo.md`, `docs/datafelter.md` og denne filen før større endringer.
- Oppdater `docs/todo.md` når en oppgave er gjort eller endrer retning.
- Oppdater denne filen når tekniske valg tas.
- Hold løsningen enkel i starten.
- Programmering startet etter brukerens beskjed.
- Gjør endringer kontrollert og test at appen faktisk kan åpnes.

## Nåværende implementasjon

Første versjon er laget uten eksterne avhengigheter:

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`

Dette gjør at appen kan kjøres gratis som statisk web-app og senere legges på GitHub Pages. Den bruker foreløpig `localStorage` for enkel lokal lagring. IndexedDB er fortsatt ønsket teknisk retning når datamengden vokser, men localStorage er brukt for å få første fungerende versjon raskt på plass.

Første versjon har:

- Blokker for følelse, kropp, søvn, måltid, væske, sykkel og notat.
- Dagens blokker kan samles til én lagret dag.
- Startliste med vanlige matvarer.
- Automatisk makroberegning fra gram og næring per 100 gram.
- Matvareliste med redigering og nye matvarer.
- Historikk for lagrede dager.
- Enkel SVG-graf.
- JSON eksport og import.
- PWA-manifest og service worker.

## Foreslått teknisk retning

Første versjon bør være en mobilvennlig web-app. Det er den beste retningen hvis alt skal kunne gjøres gratis og brukes på telefon.

Anbefalt oppsett:

- Vite + React + TypeScript.
- IndexedDB for lokal lagring i nettleseren.
- Recharts eller Chart.js for grafer.
- Eksport til JSON og CSV tidlig.
- PWA senere, slik at appen kan legges på hjemskjermen.
- GitHub Pages eller tilsvarende gratis hosting senere hvis appen skal åpnes fra en lenke.

Språk og teknologi:

- HTML for struktur.
- CSS for design og mobiltilpasning.
- TypeScript for logikk.
- React for appen.
- JSON for backup og intern datastruktur.
- CSV for enkel deling med Excel.

Hvorfor disse valgene:

- TypeScript gjør det lettere å holde orden på alle tallfeltene.
- React passer godt til skjema, redigering, historikk og grafer.
- IndexedDB passer bedre enn localStorage når det blir matvareliste, mange registreringer og backup.
- Web-app gjør at telefonbruk er mulig uten app-butikk.
- Alt kan bygges med gratis verktøy.

Unngå i første versjon:

- Betalt server.
- Betalt database.
- App Store / Google Play.
- Innlogging før det faktisk trengs.
- Automatisk synk før lokal app fungerer bra.

Gratis første driftsmodell:

- Appen kjører i nettleseren.
- Data lagres lokalt på enheten.
- Brukeren kan eksportere backup.
- Brukeren kan importere backup på annen enhet ved behov.
- Senere kan appen hostes gratis som statiske filer.

Anbefalt dataflyt mellom telefon og PC:

- Telefonen brukes som innsamler.
- Brukeren legger inn blokker gjennom dagen.
- Blokkene samles til én dagregistrering.
- Telefonen eksporterer en pakke med usendte dager.
- Pakken sendes som fil, for eksempel via Gmail, kabel, Quick Share, AirDrop eller annen filoverføring.
- PC-en importerer pakken og lagrer data lokalt.
- Telefonen viser lagringsbruk og antall usendte dager.
- Etter bekreftet import kan telefonen slette lokale dagregistreringer.
- Matvareliste, favoritter og standardmåltider bør beholdes på telefonen ved reset.

Eksportpakken bør være JSON først:

- `exportId`
- `createdAt`
- `deviceName`
- `entries`
- `blocks`
- `foods`
- `mealTemplates`
- `lastExportedAt`
- `appVersion`

CSV kan komme i tillegg for Excel, men JSON bør være hovedformat for komplett backup/import.

Mobilflyt for matregistrering:

- Søk i matvarelisten.
- Velg matvare.
- Skriv gram.
- Regn ut makroer automatisk.
- Vis favoritter og sist brukte matvarer først.
- Støtt standardmåltider og kopiering fra tidligere dager.

Tidligere vurdert, men ikke hovedanbefalt nå:

- Ren HTML/CSS/JavaScript kan være enklere, men blir fort rotete når appen får matdatabase, grafer og redigering.
- Python passer bra til analyse, men ikke som hovedspråk for mobilapp i nettleser.
- En ekte mobilapp krever mer oppsett og kan gi app-butikk/kostnad senere.

## Hvorfor web-app først?

- Kan brukes på telefon uten app-butikk.
- Lett å dele som mappe, lenke eller eksport senere.
- Rask å bygge og endre.
- Kan senere gjøres om til PWA, slik at den kan legges på hjemskjermen på mobilen.

## Android-kjøring

Målet er at appen skal kjøre på Android uten Google Play.

Utviklingsflyt senere:

- Start Vite dev-server på PC med host mot lokalnettverket.
- Finn PC-ens lokale IP-adresse.
- Åpne appen i Chrome på Android via lokal adresse, for eksempel `http://192.168.x.x:5173`.
- PC og Android må være på samme Wi-Fi.
- Test mobilvisning, lagring, eksport og import.

Ferdig bruk senere:

- Bygg appen som statiske filer.
- Legg den gratis på GitHub Pages eller tilsvarende.
- Åpne lenken i Chrome på Android.
- Bruk "Legg til på startskjermen".
- Når PWA er satt opp, kan appen oppføre seg mer som en vanlig mobilapp.

Android-krav:

- Responsivt design for liten skjerm.
- Touch-vennlige knapper.
- IndexedDB må brukes for lokal lagring.
- Eksportfil må kunne lastes ned/deles fra Android.
- Offline-støtte bør legges til når grunnfunksjonene er stabile.

## Første tekniske milepæl

Lage en enkel app med:

- Mobiltilpasset dagskjema.
- Lagre-knapp.
- Liste over tidligere registreringer.
- Mulighet til å åpne og redigere en dag.
- Eksport av data som fil.

## Datamodell, første utkast

En dagbokregistrering bør ha:

- `id`
- `date`
- `dayType`
- `dailyFeeling`
- `energy`
- `mood`
- `stress`
- `recovery`
- `sleep`
- `rides`
- `race`
- `meals`
- `dailyNutritionTotals`
- `notes`
- `createdAt`
- `updatedAt`

Telefonen bør også kunne lagre midlertidige blokker:

- `blocks`
- `blockId`
- `entryDate`
- `blockType`
- `createdAt`
- `payload`
- `convertedToEntry`
- `exportedAt`

Matdelen bør ha egen matvaredatabase:

- `foods`
- `foodId`
- `foodName`
- `kcalPer100g`
- `carbsPer100g`
- `proteinPer100g`
- `fatPer100g`
- `saltPer100g`
- `amountGrams`
- `calculatedMacros`
- `source`
- `isFavorite`
- `lastUsedAt`

Matvaredatabasen bør leveres med en startliste med vanlige matvarer. Brukeren skal kunne redigere verdier, legge til nye matvarer, merke favoritter og gjenbruke standardmåltider.

Viktig regel: fritekst nederst skal ikke brukes til grafer. Grafer og analyser skal bygges på tallfelter og beregnede summer.

## Viktige valg som ikke er tatt ennå

- Om data skal synkes mellom enheter.
- Om appen skal ha passord eller kryptering.
- Om vi skal importere fra Garmin/Strava.
- Om analyse skal være enkel statistikk eller mer avanserte mønstre.
- Første grafside bør trolig inneholde vekt, væske, makroer, dagsfølelse, søvn, restitusjon og treningsmengde.
- Om eksportfilen senere skal kunne pakkes som zip hvis den blir stor.
- Hvor mye data som bør beholdes på telefon etter eksport til PC.
