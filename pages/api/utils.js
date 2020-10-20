import { v4 as uuid } from 'uuid'

export function getDefaultHeaders () {
  return {
    'Nav-Consumer-Id': 'arbeidssokerregistrering-veileder',
    'Nav-Call-Id': uuid()
  }
}
