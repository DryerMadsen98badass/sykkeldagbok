# GitHub og publisering

## Trenger jeg Visual Studio?

Nei. Du trenger ikke Visual Studio.

Anbefalt:

- VS Code hvis du vil redigere filene selv.
- Git for å laste opp til GitHub.
- Node.js for å kjøre lokal server og senere bygge app hvis vi går over til React/Vite.

På denne PC-en er Node og Git allerede funnet. `npm` virker via `npm.cmd`.

## Kjøre appen lokalt på PC

Fra `sykling`-mappen:

```powershell
node dev-server.mjs
```

Åpne deretter:

```text
http://localhost:5173
```

For Android-test må PC og telefon være på samme Wi-Fi. Da åpnes PC-ens lokale IP-adresse fra Chrome på Android, for eksempel:

```text
http://192.168.x.x:5173
```

## Repository

GitHub-repoet heter:

```text
sykkeldagbok
```

Når repoet kobles lokalt, må `DIN_GITHUB_REPO_URL` byttes med den faktiske repo-lenken fra GitHub.

Eksempel på HTTPS-lenke:

```text
https://github.com/BRUKERNAVN/sykkeldagbok.git
```

Faktisk repo-lenke:

```text
https://github.com/DryerMadsen98badass/sykkeldagbok.git
```

## Legge ut gratis på GitHub Pages senere

1. Lag en ny repository på GitHub. Dette er gjort: `sykkeldagbok`.
2. Koble lokal mappe til GitHub-repoet.
3. Last opp filene i `sykling`-mappen.
4. Gå til repository settings.
5. Gå til Pages.
6. Velg deploy fra branch.
7. Velg `main` og root-mappen.
8. GitHub gir deg en gratis lenke.

Kommandoer når repo-lenken er kjent:

```powershell
git add .
git commit -m "First sykkeldagbok version"
git branch -M main
git remote add origin DIN_GITHUB_REPO_URL
git push -u origin main
```

## Status nå

Første commit er laget lokalt, branch heter `main`, og remote `origin` peker til:

```text
https://github.com/DryerMadsen98badass/sykkeldagbok.git
```

Hvis push ikke er gjort ennå, kjør fra `sykling`-mappen:

```powershell
git push -u origin main
```

Hvis Git spør om innlogging, logg inn med GitHub-brukeren din. GitHub krever normalt nettleserinnlogging, GitHub Desktop, VS Code-innlogging eller personal access token for HTTPS-push.

Når appen ligger på GitHub Pages kan den åpnes på Android i Chrome og legges til på startskjermen.

## Viktig

GitHub Pages er offentlig hvis repository er offentlig. Ikke legg ekte private eksportfiler eller persondata i GitHub-repoet.

Appkode kan ligge på GitHub. Dine treningsdata skal bare ligge lokalt på telefon/PC og i eksportfiler du selv kontrollerer.
