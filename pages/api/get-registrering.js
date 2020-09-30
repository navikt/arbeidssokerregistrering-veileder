import axios from 'axios'

export default async (request, response) => {
  try {
    const { data } = await axios(process.env.VEILARBREGISTRERING_URL, { headers: request.headers })
    response.json(data)
  } catch (error) {
    console.error(error)
    response.json(bruker)
  }
}

export const bruker = {
  type: 'ORDINAER',
  registrering: {
    id: 103,
    opprettetDato: '2020-01-03T11:53:05.486686+01:00',
    besvarelse: {
      utdanning: 'HOYERE_UTDANNING_5_ELLER_MER',
      utdanningBestatt: 'JA',
      utdanningGodkjent: 'JA',
      helseHinder: 'NEI',
      andreForhold: 'NEI',
      sisteStilling: 'HAR_HATT_JOBB',
      dinSituasjon: 'MISTET_JOBBEN'
    },
    sisteStilling: {
      label: 'Barnehageassistent',
      konseptId: 53614,
      styrk08: '5311'
    },
    teksterForBesvarelse: [
      {
        sporsmalId: 'fremtidigSituasjon',
        sporsmal: 'Hva tenker du om din fremtidige situasjon?',
        svar: 'Jeg trenger ny jobb'
      },
      {
        sporsmalId: 'utdanningBestatt',
        sporsmal: 'Er utdanningen din bestått?',
        svar: 'Ikke aktuelt'
      },
      {
        sporsmalId: 'utdanningGodkjent',
        sporsmal: 'Er utdanningen din godkjent i Norge?',
        svar: 'Ikke aktuelt'
      },
      {
        sporsmalId: 'utdanning',
        sporsmal: 'Hva er din høyeste fullførte utdanning?',
        svar: 'Ingen utdanning'
      },
      {
        sporsmalId: 'andreForhold',
        sporsmal: 'Er det noe annet enn helsen din som NAV bør ta hensyn til?',
        svar: 'Nei'
      }
    ]
  }
}
