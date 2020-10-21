import axios from 'axios'
import { getSession } from 'next-auth/client'
import { getDefaultHeaders } from './utils'

export default async (request, response) => {
  try {
    const { data } = await axios('http://localhost:3000/arbeid/arbeidssokerregistrering-veileder/api/auth/session')
    console.log(data)
  } catch (error) {
    console.error('localhost')
    console.error(error)
  }
  try {
    const { data } = await axios('https://arbeid.dev.intern.nav.no/arbeid/arbeidssokerregistrering-veileder/api/auth/session')
    console.log(data)
  } catch (error) {
    console.error('dev.intern')
    console.error(error)
  }

  const session = await getSession({ req: request })
  if (!session) return Promise.reject(new Error('Missing session'))

  const bearer = `Bearer ${session.accessToken}`
  try {
    axios.defaults.headers.common.Authorization = bearer

    const { data } = await axios(process.env.VEILARBREGISTRERING_URL, {
      headers: getDefaultHeaders()
    })
    response.json(data)
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}
