import axios from 'axios'
import { getSession } from 'next-auth/client'
import { getDefaultHeaders } from './utils'

export default async (request, response) => {
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
