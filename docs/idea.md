# Idé: Sykkeldagbok

## Kort beskrivelse

Sykkeldagboken skal være et privat program for å skrive ned trening, ritt, mat, drikke, vekt, væske, søvn, restitusjon og følelse. Hovedpoenget er ikke bare å lagre hva som skjedde, men å kunne se utvikling og mønstre over tid.

Programmet skal brukes som en daglig logg. Etter hver dag, trening eller ritt fyller brukeren ut et skjema. Senere skal brukeren kunne se grafer og oversikter som viser hvordan kroppen, formen, maten, væskeinntaket og følelsen utvikler seg.

## Hovedmål

- Gjøre det enkelt å fylle ut en daglig sykkeldagbok.
- Gjøre mest mulig om til tall, slik at grafer og oversikt blir lett å forstå.
- Skille mellom trening, ritt, hvile, sykdom, reise og andre dager.
- Registrere hva som ble spist, hvor mye som ble spist, og når det ble spist.
- Regne ut makroer automatisk fra matvarer og gram.
- Registrere væskeinntak, både totalt og rundt økt eller ritt.
- Registrere sykkeløkter med varighet, distanse, intensitet og opplevelse.
- Registrere ritt med følelse før, under og etter, samt resultat og læring.
- Registrere vekt og andre kroppsmål over tid.
- Registrere søvn, restitusjon, humør, stress, energi og kroppsfølelse.
- Kunne redigere tidligere skjema hvis noe ble glemt.
- Kunne se grafer for utvikling over tid.
- Kunne eksportere eller dele resultater senere.
- Være privat som standard.

## Tall først

Et viktig prinsipp er at alt som skal brukes til oversikt, grafer og analyse bør lagres som tall. Tekst er nyttig for notater, men tekst skal ikke være grunnlaget for grafene.

Eksempler på tall:

- Vekt i kg.
- Væske i liter eller milliliter.
- Søvn i timer.
- Energi fra 1 til 10.
- Humør fra 1 til 10.
- Stress fra 1 til 10.
- Restitusjon fra 1 til 10.
- Muskelømhet fra 1 til 10.
- Intensitet fra 1 til 10.
- Distanse i km.
- Varighet i minutter.
- Kalorier.
- Karbohydrater i gram.
- Protein i gram.
- Fett i gram.
- Salt/elektrolytter hvis ønsket.

Nederst i skjemaet skal det være et fritekstfelt der brukeren kan skrive hva som helst. Dette feltet er bare for hukommelse og forklaring. Det skal ikke påvirke grafer, summer eller analyser.

## Brukssituasjoner

### Daglig bruk

Brukeren åpner programmet på telefonen, fyller ut dagens skjema og trykker submit. Hvis noe glemmes, skal samme dag kunne åpnes og redigeres senere.

### Etter trening

Brukeren registrerer type økt, varighet, distanse, intensitet, hvordan beina føltes, hva som fungerte, hva som ikke fungerte, hva som ble spist og drukket før, under og etter økten.

### Etter ritt

Brukeren registrerer rittnavn, starttid, resultat, klasse, oppvarming, ernæring, taktikk, følelse før start, underveis og etterpå. Det skal også være plass til læring: hva bør gjentas, og hva bør endres neste gang.

### Hviledag

Brukeren registrerer hvile, søvn, mat, væske, kroppsfølelse, stress og restitusjon. Dette er viktig fordi hviledager kan forklare hvorfor neste økt blir god eller dårlig.

### Ukentlig gjennomgang

Brukeren kan se på grafer og oversikter for siste uke, måned eller sesong. Målet er å finne mønstre, for eksempel om dårlig søvn gir dårligere følelse på sykkel, eller om lite væske gjør restitusjonen dårligere.

## Telefon først

Programmet skal kunne brukes på telefon. Skjemaet må være raskt å fylle ut, med en blanding av knapper, tall, skalaer og fritekst.

Viktig:

- Store nok felter og knapper for mobil.
- Ikke for mye tekst på én skjerm.
- Mulighet for å lagre raskt.
- Mulighet for å redigere senere.
- Fritekst der brukeren trenger å forklare.
- Skalaer fra 1 til 10 for følelse, energi, restitusjon og lignende.

## Android-bruk

Telefonen er Android, så første løsning bør fungere godt i Chrome på Android.

Måten å bruke appen på Android:

- Under utvikling kan appen åpnes fra en lokal nettadresse hvis PC og telefon er på samme Wi-Fi.
- Når appen er klar, kan den legges på en gratis nettside/lenke, for eksempel GitHub Pages.
- På Android åpnes lenken i Chrome.
- Deretter kan brukeren velge "Legg til på startskjermen".
- Da får appen et ikon på telefonen og føles mer som en vanlig app.

Dette kalles en PWA når den er satt opp riktig. Fordelen er at man slipper Google Play, app-butikk og betaling.

Viktig for Android:

- Appen må fungere godt i Chrome.
- Den må kunne lagre lokalt på telefonen.
- Den må kunne eksportere en fil fra telefonen.
- Den må kunne fungere uten innlogging.
- Den bør kunne brukes selv om den ikke er i Google Play.
- Senere bør den støtte offline-bruk, slik at registrering kan gjøres uten nett.

Første praktiske test senere:

1. Start appen på PC.
2. Åpne samme lokale adresse på Android mens begge er på samme Wi-Fi.
3. Test at skjema/blokker fungerer på telefon.
4. Test at data lagres lokalt i Android Chrome.
5. Test eksport av JSON-fil fra telefon.

## Gratis løsning

Målet er at programmet skal kunne bygges og brukes helt gratis.

Anbefalt retning:

- Lage en mobilvennlig web-app.
- Bruke gratis programmeringsverktøy.
- Lagre data lokalt i nettleseren først.
- Kunne eksportere backup til fil.
- Unngå betalte databaser, betalte servere og app-butikk i første versjon.

Dette betyr at appen kan åpnes i nettleseren på telefon. Senere kan den gjøres om til en PWA, slik at den kan legges på hjemskjermen og føles mer som en vanlig app.

Hvis appen bare lagrer lokalt på telefonen, er den gratis og privat, men dataene ligger på den enheten. Derfor bør eksport/backup komme tidlig.

Første anbefaling er: lokal lagring pluss enkel backupfil. Det er enklest, gratis og mest kontrollert.

## Telefon som innsamler og PC som hovedlager

En god løsning er at telefonen brukes til å samle inn data gjennom dagen, mens PC-en brukes til langtidslagring, grafer og mer analyse.

Flyt:

1. Brukeren legger inn blokker på telefonen gjennom dagen.
2. På slutten av dagen samles blokkene til én daglig registrering.
3. Etter flere dager, for eksempel 7 dager, eksporteres alt fra telefonen som én fil.
4. Filen sendes til PC-en via Gmail, kabel, Quick Share, AirDrop, annen e-post eller annen filoverføring.
5. På PC-en importeres filen i programmet.
6. PC-en lagrer dataene lokalt og bruker dem til grafer, oversikt og analyse.
7. Når importen er bekreftet, kan telefonen tømmes eller arkiveres for å spare plass.

Dette gir en gratis og kontrollert løsning uten at appen trenger full automatisk synk i starten.

## Eksportfil fra telefon til PC

Hovedløsningen bør være en eksportfil som inneholder alt PC-programmet trenger. Filen kan sendes med Gmail eller en annen metode. Appen trenger derfor ikke Google Drive eller automatisk synk i første versjon.

Eksportfilen bør kunne:

- Inneholde alle usendte dagregistreringer.
- Inneholde alle blokker som hører til registreringene.
- Inneholde nye eller endrede matvarer fra telefonen.
- Inneholde standardmåltider og favoritter hvis de er endret.
- Inneholde metadata, for eksempel eksportdato, appversjon og enhetsnavn.
- Kunne importeres av PC-programmet uten manuell rydding.

Anbefalt hovedformat er JSON, fordi det kan inneholde alt strukturert. CSV kan eksporteres i tillegg for Excel, men CSV bør ikke være hovedbackup, fordi det er dårligere for blokker, matvarer og full import.

Filen kan for eksempel hete:

- `sykkeldagbok-export-2026-07-04.json`

Senere kan eksportfilen eventuelt pakkes som `.zip` hvis den inneholder mye data, bilder eller flere filer.

Viktig:

- Appen bør vise når data sist ble eksportert.
- Appen bør vise hvor mange registreringer som ikke er sendt til PC.
- Appen bør ikke slette telefondata før brukeren bekrefter at import på PC er gjort.
- Eksportfilen bør inneholde både dagdata, matvarer som er lagt til, standardmåltider og metadata.

## Lagringsbruk på telefon

Telefonappen bør vise hvor mye lokal data som er brukt.

Eksempler:

- Antall dager lagret på telefon.
- Antall blokker lagret.
- Antall matvarer/egne matvarer lagret.
- Omtrentlig lagringsbruk, for eksempel 12 MB eller 1 GB.
- Sist eksportert dato.
- Antall dager siden siste eksport.

Hvis telefonen har mye data, bør appen kunne foreslå eksport.

Eksempel:

- "Du har 7 dager som ikke er sendt til PC."
- "Lokal lagring: 38 MB."
- "Eksporter til fil."
- "Nullstill telefondata etter bekreftet import."

Reset av telefondata bør være kontrollert:

- Først eksport.
- Deretter import på PC.
- Deretter bekreftelse.
- Så kan telefonens lokale registreringer slettes.

Matvarelisten bør ikke nødvendigvis slettes når telefondata resettes. Det kan være bedre å slette bare dagregistreringer, men beholde matvarer, favoritter og standardmåltider, slik at telefonen fortsatt er rask å bruke.

## Blokker i stedet for langt skjema

Skjemaet bør ikke føles som ett langt skjema fra A til Z. Det bør bygges av blokker.

Eksempler på blokker:

- Måltid.
- Drikke/væske.
- Vekt.
- Søvn.
- Følelse.
- Sykkeløkt.
- Ritt.
- Restitusjon.
- Sykdom/skade.
- Notat.

Brukeren kan legge til blokker gjennom dagen. På slutten av dagen konverterer appen blokkene til én samlet dagregistrering.

Fordeler:

- Raskere på telefon.
- Mindre stress enn ett langt skjema.
- Brukeren kan legge inn ting når de skjer.
- Dagen kan fortsatt lagres som strukturert data til slutt.
- PC-en kan analysere ferdige dagregistreringer.

Eksempel:

- Morgen: legg til vekt, søvn og følelse.
- Frokost: legg til måltidsblokk.
- Under økt: legg til væske og karbohydrat.
- Etter økt: legg til øktblokk, restitusjon og mat.
- Kveld: legg til siste følelse og notat.
- Til slutt: appen lager én dagsregistrering.

## Hvordan skrive listen på telefonen

Matlisten må fungere raskt på telefon. Brukeren skal ikke skrive lange tekster for hvert måltid.

Foreslått flyt:

1. Velg måltid, for eksempel frokost, før økt eller etter økt.
2. Trykk "Legg til matvare".
3. Begynn å skrive, for eksempel "egg".
4. Appen viser forslag som "kokt egg", "stekt egg" og "omelett".
5. Trykk på riktig matvare.
6. Skriv gram.
7. Appen regner makroer automatisk.
8. Trykk "Legg til matvare" igjen for ketchup, brød, ris eller annet.

For å gjøre mobilbruken raskere bør appen ha:

- Søkefelt med forslag mens man skriver.
- Favoritter øverst.
- Sist brukte matvarer.
- Standardmåltider.
- Kopier måltid fra i går eller fra en tidligere dag.
- Store knapper og tallfelt.
- Mulighet for å endre gram raskt med pluss/minus.

Hvis matvaren ikke finnes:

- Valg 1: legg til ny matvare med makroer per 100 gram.
- Valg 2: skriv makroer manuelt bare for dette måltidet.

Når en ny matvare legges til, skal den kunne brukes fra telefonen neste gang uten å legges inn på nytt.

## Forside

Forsiden er ikke bestemt ennå, men den bør ikke bare være pynt. Den bør hjelpe brukeren å forstå status raskt.

Mulige elementer på forsiden:

- Knapp for "Ny registrering".
- Dagens dato og om dagen allerede er fylt ut.
- Kort status for siste registrering.
- Siste 7 dager med enkel oversikt.
- Snitt for søvn, følelse, restitusjon og vekt siste uke.
- Antall treninger og ritt siste uke eller måned.
- Varsel hvis noe ser viktig ut, for eksempel lav restitusjon flere dager på rad.
- Snarvei til grafer.
- Snarvei til historikk.

Forsiden kan starte enkelt, men bør senere bli et lite dashboard.

## Skjema

Skjemaet skal være kjernen i programmet. Det må være detaljert nok til å gi verdi, men ikke så tungt at det blir slitsomt å bruke.

Skjemaet bør deles i seksjoner:

- Dagstype og generell følelse.
- Kropp, vekt og helse.
- Søvn og restitusjon.
- Sykkeløkt eller ritt.
- Mat.
- Væske.
- Notater og læring.

## Viktige registreringer

### Dagstype

Brukeren skal velge hva slags dag det er:

- Trening.
- Ritt.
- Hvile.
- Syk.
- Reise.
- Annet.

Dette er viktig fordi grafene og analysen må forstå konteksten. En lav energidag etter et ritt betyr noe annet enn en lav energidag etter tre hviledager.

### Følelse

Følelse skal være en viktig del av appen. Ikke alt kan måles med tall fra klokke eller sykkelcomputer.

Eksempler:

- Dagsfølelse.
- Energi.
- Humør.
- Motivasjon.
- Stress.
- Kroppsfølelse.
- Bein-følelse.
- Opplevd restitusjon.
- Opplevd intensitet på økt.

Dette bør kunne vises i grafer over tid.

### Vekt

Vekt skal kunne registreres og vises i graf.

Mulige felt:

- Morgenvekt.
- Kveldsvekt.
- Kommentar.
- Om vekten er målt før eller etter trening.

Vekt må brukes forsiktig. Målet er å se utvikling og sammenheng, ikke at appen skal presse brukeren mot feil fokus.

### Væske

Væskeinntak skal registreres fordi det kan påvirke prestasjon, restitusjon, vekt og følelse.

Mulige felt:

- Total væske gjennom dagen.
- Væske før økt.
- Væske under økt.
- Væske etter økt.
- Sportsdrikk.
- Elektrolytter/salt.
- Kaffe/koffein.
- Kommentar om tørste, hodepine eller mage.

Dette bør kunne vises i graf, for eksempel væske per dag eller væske rundt harde økter.

### Mat

Matregistrering skal være praktisk, men må gjøres om til tall. Når brukeren skriver inn mat, skal programmet finne matvaren i en egen matvareliste og regne ut makroer basert på mengde.

For hvert måltid:

- Tidspunkt.
- Måltidstype.
- Valgte matvarer.
- Gram per matvare.
- Automatisk utregnet kalorier.
- Automatisk utregnet karbohydrater.
- Automatisk utregnet protein.
- Automatisk utregnet fett.
- Magefølelse.

Eksempel:

- Brukeren søker/skriver "stekt egg".
- "Stekt egg" kommer opp som valg.
- Brukeren velger matvaren.
- Brukeren skriver 100 gram.
- Programmet regner automatisk ut kalorier, karbohydrater, protein og fett.
- Hvis brukeren også hadde ketchup, søker brukeren "ketchup", velger riktig matvare og skriver 30 gram.
- Programmet legger sammen makroene for hele måltidet.

Dette skal fungere for all mat. Målet er ikke at brukeren skriver en lang tekst om maten, men at måltidet bygges opp av matvarer med gram og makroer.

### Matvareliste og makroer

Programmet skal ha en matvareliste. Listen skal ikke starte tom. Første versjon bør allerede inneholde vanlige matvarer, slik at brukeren ikke må bruke lang tid på å bygge opp listen før appen blir nyttig.

Hver matvare bør lagres med næringsinnhold per 100 gram.

Eksempel på matvare:

- Navn: Stekt egg.
- Kalorier per 100 g.
- Karbohydrater per 100 g.
- Protein per 100 g.
- Fett per 100 g.
- Eventuelt salt per 100 g.

Når brukeren legger inn mengde, regner programmet slik:

- Valgt mengde / 100 x næringsinnhold per 100 g.

Hvis en matvare ikke finnes i listen, skal brukeren kunne velge:

- Legge til ny matvare i matvarelisten.
- Skrive inn makroer manuelt bare for dette måltidet.

Hvis brukeren legger til en ny matvare, skal den være tilgjengelig neste gang. Da kan brukeren bare begynne å skrive navnet, få den opp som valg, velge den og skrive gram.

Matvarelisten bør støtte flere varianter av samme mat:

- Egg.
- Kokt egg.
- Stekt egg.
- Omelett.
- Ketchup.
- Brødskive.
- Ris kokt.
- Pasta kokt.
- Sportsdrikk.

Dette er viktig fordi "egg" ikke alltid betyr det samme. Brukeren skal kunne velge den varianten som faktisk passer.

### Startliste med vanlige matvarer

Appen bør leveres med en ferdig startliste. Den trenger ikke være perfekt, men den bør dekke det vanligste en syklist spiser.

Startlisten bør minst dekke:

- Egg, kokt egg, stekt egg og omelett.
- Brød, grovbrød, knekkebrød og wraps.
- Havregryn, müsli, granola og frokostblanding.
- Ris, pasta, potet og søtpotet.
- Kylling, kjøttdeig, biff, skinke og kalkun.
- Laks, tunfisk og annen vanlig fisk.
- Melk, yoghurt, gresk yoghurt, cottage cheese og ost.
- Banan, eple, appelsin, bær og rosiner.
- Grønnsaker som salat, tomat, agurk, paprika, gulrot og brokkoli.
- Ketchup, syltetøy, honning, peanøttsmør og vanlige sauser.
- Olje, smør og nøtter.
- Sportsdrikk, gel, energibar og restitusjonsdrikk.
- Kaffe, brus, juice og vann.

Matvarer i startlisten bør ha en kilde eller merkes som standardverdi. Brukerlagde matvarer bør merkes som egne verdier. Det gjør det lettere å vite om tallene er presise eller bare omtrentlige.

### Favoritter og vanlige måltider

For at appen skal bli rask i bruk, bør den ha:

- Favorittmatvarer.
- Sist brukte matvarer.
- Egne standardmåltider.
- Mulighet til å kopiere et måltid fra en tidligere dag.
- Mulighet til å lagre en kombinasjon som fast måltid, for eksempel "frokost før langtur".

Dette er viktig fordi mange spiser mye av det samme. Da bør brukeren slippe å legge inn egg, brød, yoghurt eller sportsdrikk på nytt hver gang.

### Måltidssummer

Hvert måltid bør automatisk få summer:

- Total gram mat registrert.
- Kalorier.
- Karbohydrater.
- Protein.
- Fett.
- Væske hvis drikke er lagt inn.

Hele dagen bør også få summer:

- Dagens kalorier.
- Dagens karbohydrater.
- Dagens protein.
- Dagens fett.
- Dagens væske.
- Karbohydrater før økt.
- Karbohydrater under økt.
- Karbohydrater etter økt.

Dette gjør det mulig å se sammenheng mellom mat, økt, restitusjon, vekt og følelse.

### Sykkeløkt

For trening bør appen registrere:

- Økttype.
- Starttid.
- Varighet.
- Distanse.
- Høydemeter.
- Intensitet 1-10.
- Hvor hard økten føltes.
- Snittpuls.
- Makspuls.
- Watt hvis tilgjengelig.
- Kommentar.
- Hva fungerte bra.
- Hva fungerte dårlig.

Programmet må kunne håndtere flere økter på samme dag senere, men første versjon kan starte med én økt per dag hvis vi ønsker enkelhet.

### Ritt

Ritt bør ha egne felt fordi ritt har mer kontekst enn vanlig trening.

Mulige felt:

- Rittnavn.
- Dato.
- Starttid.
- Klasse/kategori.
- Resultat.
- Plassering.
- Følelse før start.
- Følelse underveis.
- Følelse etterpå.
- Oppvarming.
- Taktikk.
- Ernæring før ritt.
- Ernæring under ritt.
- Væske under ritt.
- Hva fungerte.
- Hva bør endres.
- Læring til neste ritt.

## Historikk og redigering

Programmet må ha en historikk der tidligere dager kan åpnes.

Krav:

- Se liste over tidligere dager.
- Filtrere på trening, ritt, hvile eller sykdom senere.
- Åpne en tidligere dag.
- Redigere skjema.
- Lagre endringer.
- Ikke lage duplikat hvis man redigerer samme dag.

## Grafer og utvikling

Det skal være en egen plass i programmet for grafer. Denne delen skal gjøre det mulig å se utviklingen over tid.

Mulige grafer:

- Vekt over tid.
- Væskeinntak over tid.
- Kalorier over tid.
- Karbohydrater over tid.
- Protein over tid.
- Fett over tid.
- Karbohydrater før, under og etter økt.
- Dagsfølelse over tid.
- Energi over tid.
- Humør over tid.
- Stress over tid.
- Restitusjon over tid.
- Søvn timer over tid.
- Søvnkvalitet over tid.
- Muskelømhet over tid.
- Treningsvarighet per uke.
- Distanse per uke.
- Intensitet over tid.
- Rittfølelse og resultat over tid.
- Mat rundt økter, for eksempel karbohydrater før harde økter.

Mulige sammenligninger:

- Vekt mot følelse.
- Søvn mot restitusjon.
- Væske mot dagsfølelse.
- Karbohydrater mot øktfølelse.
- Kalorier mot restitusjon.
- Protein mot muskelømhet.
- Stress mot energi.
- Hard økt mot restitusjon dagen etter.
- Mat før økt mot øktfølelse.
- Rittforberedelse mot resultat.

Grafdelen bør ha tidsvalg:

- Siste 7 dager.
- Siste 30 dager.
- Siste 90 dager.
- Hele perioden.

## Analyse og mønstre

Etter hvert kan appen gi enkle observasjoner. Den skal ikke late som den vet alt, men vise ting brukeren kan vurdere.

Eksempler:

- "Restitusjon har vært lav tre dager på rad."
- "Du føler deg ofte bedre på økter etter mer enn 7 timer søvn."
- "Væskeinntaket er lavere på dager med tung kroppsfølelse."
- "Harde økter kommer tett denne uken."
- "Rittdagene med best følelse har ofte bedre måltidsnotater før start."

Dette bør være forsiktige observasjoner, ikke bastante konklusjoner.

## Deling og eksport

Programmet skal være privat, men resultatene bør kunne deles når brukeren ønsker det.

Mulige eksportformer:

- CSV.
- Excel.
- PDF-rapport.
- JSON backup.
- Skjermbilde av grafer.
- Uke- eller månedsrapport.

Dette gjør at brukeren kan dele med trener, lagkamerat eller bare beholde backup.

## Privat og kontrollert

Siden dette inneholder private opplysninger, bør appen være privat som standard.

Viktige prinsipper:

- Brukeren eier dataene.
- Data skal ikke deles uten at brukeren aktivt velger det.
- Eksport og backup må være tydelig.
- Hvis synk legges til senere, må det gjøres kontrollert.
- Passord eller kryptering kan vurderes senere.

## Første versjon

Første versjon bør ikke prøve å gjøre alt. Den bør gi en fungerende kjerne:

- Mobilvennlig skjema.
- Submit-knapp.
- Lagre lokalt.
- Historikk.
- Redigere tidligere registrering.
- Matregistrering med matvareliste, gram og automatisk makroberegning.
- Mulighet til å legge til ny matvare hvis den mangler.
- Mulighet til å skrive makroer manuelt hvis matvaren ikke skal lagres.
- Enkel grafside med noen få grafer.
- Eksport av data.

Første grafer bør være:

- Vekt.
- Væske.
- Kalorier.
- Karbohydrater.
- Protein.
- Fett.
- Dagsfølelse.
- Restitusjon.
- Søvn.
- Treningsmengde.

## Senere versjoner

Mulige utvidelser:

- Flere økter samme dag.
- Bilder av mat.
- Strekkode eller matvaresøk mot ekstern database.
- Import fra Garmin, Strava, Wahoo eller lignende.
- Mer avansert analyse.
- Ukerapport.
- Rittarkiv.
- Sesongmål.
- Planlagt trening mot faktisk trening.
- PWA slik at appen kan ligge på hjemskjermen på telefon.
- Synk mellom telefon og PC.

## Det jeg mener er viktig

Det viktigste er at appen blir enkel nok til at den faktisk brukes hver dag. Hvis skjemaet blir for tungt fra start, mister det verdi. Derfor bør første versjon ha et godt, men ikke altfor stort skjema.

Jeg mener disse tingene er viktigst:

- Telefon først, fordi registreringen skjer rett etter dagen, økten eller rittet.
- Redigering må være med tidlig, fordi man ofte glemmer noe.
- Grafer må være med tidlig, fordi poenget er å se utvikling.
- Vekt, væske, makroer, følelse, søvn og restitusjon bør være første grafene.
- Mat bør ikke være fritekst som hovedregel. Den bør bygges av matvarer, gram og makroer.
- Matvarelisten er kritisk. Den bør ha en god startliste fra dag én, ellers blir terskelen for høy.
- Favoritter, sist brukte matvarer og standardmåltider bør komme tidlig, fordi de sparer mye tid.
- Ritt bør ha egne felt, fordi ritt gir annen type læring enn trening.
- Data må kunne eksporteres, slik at brukeren ikke blir låst.
- Appen bør være privat som standard.

Jeg mener også dette mangler eller bør vurderes:

- Mål og normalområder: for eksempel ønsket vektområde, søvnmål, væskemål og karbomål på harde dager.
- Ukesoppsummering: hva var total trening, snittfølelse, snittsøvn, snittvekt og total makrofordeling.
- Markering av sykdom, skade og uvanlige dager, slik at de ikke forstyrrer analysen.
- Konkurransemodus for rittdag, med ekstra fokus på ernæring før, under og etter.
- Backup og eksport tidlig, fordi dataene blir verdifulle over tid.
- En enkel måte å korrigere matvareverdier på hvis startlisten har feil.

Min anbefaling er å bygge programmet i små steg når idéfasen er ferdig:

1. Først skjema, submit, historikk og redigering.
2. Deretter matvareliste med ferdig startliste, søk, favoritter og automatisk makroberegning.
3. Deretter standardmåltider og kopiering fra tidligere dager.
4. Deretter grafer for vekt, væske, makroer, følelse, søvn og restitusjon.
5. Deretter eksport.
6. Deretter mer avansert analyse og eventuelt synk.

Det viktigste produktvalget er balansen mellom detalj og fart. Appen må samle nok tall til å finne mønstre, men den må fortsatt være rask å fylle ut på en vanlig dag. Fritekst skal finnes nederst, men tallene skal være det som driver oversikt, grafer og analyse.
