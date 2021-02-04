[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
![](https://github.com/navikt/arbeidssokerregistrering-veileder/workflows/Build%20and%20deploy/badge.svg)

Denne er pr nå litt "nede"

Må gjøres en del konfigurasjonsmagi etter at @zeit/next-less er deprecated og Next.js 10.0.6 støtter webpack 4 og 5

# arbeidssokerregistrering-veileder

Løsning for at veiledere skal kunne overføre registrerte arbeidssøkere som har stoppet i prosessen til Arena.

##  Utvikling

Krever [Node.js](https://nodejs.org/), fortrinnsvis versjon >= 14

- klon repo
- innstaller avhengigheter `npm i`
- lag en `.env.local` basert på [eksempel.env.local](eksempel.env.local)
- start utviklingsserver `npm run dev`
- besøk [http://localhost:3000/arbeid/arbeidssokerregistrering-veileder](http://localhost:3000/arbeid/arbeidssokerregistrering-veileder)

## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles via issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen [#område-arbeid-tech](https://nav-it.slack.com/archives/CLTFAEW75)

## Lisens

[MIT](LICENSE)
