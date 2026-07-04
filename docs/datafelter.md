# Datafelter

Dette er første samlede forslag til hvilke data sykkeldagboken bør kunne lagre. Feltene kan justeres før programmering starter.

Hovedregel: alt som skal vises i grafer eller analyser bør lagres som tall. Fritekst skal ligge nederst som notat og ikke påvirke grafene.

## Dag

- Dato.
- Type dag:
  - Trening.
  - Ritt.
  - Hvile.
  - Syk.
  - Reise.
  - Annet.
- Generell dagsfølelse fra 1 til 10.
- Energi fra 1 til 10.
- Humør fra 1 til 10.
- Motivasjon fra 1 til 10.
- Stress fra 1 til 10.
- Kroppsfølelse:
  - Lett.
  - Normal.
  - Tung.
  - Stiv.
  - Sår.
  - Sykdomstegn.
- Frinotat for dagen.

## Kropp og helse

- Morgenvekt.
- Kveldsvekt.
- Kommentar til vekt.
- Hvilepuls hvis tilgjengelig.
- HRV hvis tilgjengelig.
- Sykdomstegn.
- Smerter eller skade.
- Kommentar til kropp.

## Søvn og restitusjon

- Leggetid.
- Stod opp.
- Søvnlengde.
- Søvnkvalitet fra 1 til 10.
- Restitusjon fra 1 til 10.
- Muskelømhet fra 1 til 10.
- Bein-følelse:
  - Lett.
  - Normal.
  - Tung.
  - Stiv.
  - Tom.
- Kommentar.

## Væske

- Total væske gjennom dagen.
- Væske før økt.
- Væske under økt.
- Væske etter økt.
- Sportsdrikk.
- Elektrolytter/salt.
- Kaffe/koffein.
- Kommentar om tørste, mage, hodepine eller annet.

## Sykkeløkt

- Økttype:
  - Ingen økt.
  - Rolig.
  - Intervall.
  - Langtur.
  - Ritt.
  - Restitusjon.
  - Styrke.
  - Annet.
- Starttid.
- Varighet.
- Distanse.
- Høydemeter.
- Opplevd intensitet fra 1 til 10.
- Hvor hardt føltes det:
  - Lett.
  - Moderat.
  - Hardt.
  - Maks.
- Snittpuls hvis tilgjengelig.
- Makspuls hvis tilgjengelig.
- Snittwatt hvis tilgjengelig.
- Normalized power hvis tilgjengelig.
- Kommentar til økten.
- Hva fungerte bra.
- Hva fungerte dårlig.

## Ritt

- Rittnavn.
- Starttid.
- Klasse/kategori.
- Resultat/plassering.
- Følelse før start fra 1 til 10.
- Følelse underveis fra 1 til 10.
- Følelse etterpå fra 1 til 10.
- Oppvarming.
- Taktikk.
- Ernæring før ritt.
- Ernæring under ritt.
- Væske under ritt.
- Hva fungerte.
- Hva bør endres.
- Hva lærte jeg.

## Mat og drikke

For hvert måltid:

- Tidspunkt.
- Type:
  - Frokost.
  - Lunsj.
  - Middag.
  - Kveldsmat.
  - Snack.
  - Før økt.
  - Under økt.
  - Etter økt.
- Matvarer i måltidet.
- Gram per matvare.
- Automatisk beregnet kalorier.
- Automatisk beregnet karbohydrater.
- Automatisk beregnet protein.
- Automatisk beregnet fett.
- Automatisk beregnet salt hvis tilgjengelig.
- Drikke i milliliter.
- Magefølelse:
  - Tall fra 1 til 10.

## Matvareliste

Hver matvare i listen bør ha:

- Navn.
- Variant/type, for eksempel kokt, stekt, omelett, rå, kokt ris eller kokt pasta.
- Kalorier per 100 gram.
- Karbohydrater per 100 gram.
- Protein per 100 gram.
- Fett per 100 gram.
- Salt per 100 gram hvis tilgjengelig.
- Væske per 100 gram eller milliliter hvis relevant.
- Standard porsjon hvis ønskelig.
- Kilde, for eksempel startliste, brukerlaget eller manuelt estimat.
- Favoritt ja/nei.
- Sist brukt dato.
- Sist redigert dato.

Eksempler:

- Egg.
- Kokt egg.
- Stekt egg.
- Omelett.
- Ketchup.
- Brødskive.
- Havregryn.
- Ris kokt.
- Pasta kokt.
- Sportsdrikk.

Hvis matvaren ikke finnes:

- Brukeren kan legge den til i matvarelisten.
- Brukeren kan skrive makroer manuelt for bare denne registreringen.

Startlisten bør ikke være tom. Den bør allerede inneholde vanlige matvarer som:

- Egg, kokt egg, stekt egg og omelett.
- Brød, grovbrød, knekkebrød og wraps.
- Havregryn, müsli og frokostblanding.
- Ris, pasta, potet og søtpotet.
- Kylling, kjøttdeig, biff, skinke, kalkun, laks og tunfisk.
- Melk, yoghurt, gresk yoghurt, cottage cheese og ost.
- Banan, eple, appelsin, bær og rosiner.
- Grønnsaker som salat, tomat, agurk, paprika, gulrot og brokkoli.
- Ketchup, syltetøy, honning, peanøttsmør og vanlige sauser.
- Olje, smør og nøtter.
- Sportsdrikk, gel, energibar og restitusjonsdrikk.
- Kaffe, brus, juice og vann.

## Standardmåltider

Brukeren bør kunne lagre faste måltider:

- Navn på måltid.
- Matvarer i måltidet.
- Standard gram per matvare.
- Total kalorier.
- Total karbohydrater.
- Total protein.
- Total fett.
- Når måltidet vanligvis brukes, for eksempel frokost, før økt eller etter økt.

Eksempler:

- Frokost før langtur.
- Etter intervall.
- Rittfrokost.
- Kveldsmat.

## Automatisk makroberegning

For hver matvare:

- Mengde i gram / 100 x kalorier per 100 gram.
- Mengde i gram / 100 x karbohydrater per 100 gram.
- Mengde i gram / 100 x protein per 100 gram.
- Mengde i gram / 100 x fett per 100 gram.

Programmet bør regne ut:

- Makroer per matvarelinje.
- Makroer per måltid.
- Makroer per dag.
- Makroer før økt.
- Makroer under økt.
- Makroer etter økt.

## Grafer

Disse feltene bør kunne vises i grafer:

- Vekt.
- Væskeinntak.
- Kalorier.
- Karbohydrater.
- Protein.
- Fett.
- Karbohydrater før økt.
- Karbohydrater under økt.
- Karbohydrater etter økt.
- Dagsfølelse.
- Energi.
- Humør.
- Motivasjon.
- Stress.
- Søvntimer.
- Søvnkvalitet.
- Restitusjon.
- Muskelømhet.
- Treningsvarighet.
- Distanse.
- Intensitet.
- Rittfølelse.

## Ekstra felt senere

- Vær.
- Temperatur.
- Vind.
- Sykkel brukt.
- Dekk/oppsett.
- Medisin.
- Bilder av mat.
- Import fra Strava, Garmin eller Wahoo.
