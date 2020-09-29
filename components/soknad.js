import axios from 'axios'
import useSWR from 'swr'
import NavFrontendSpinner from 'nav-frontend-spinner'
import { Innholdstittel, Sidetittel } from 'nav-frontend-typografi'
import OverforTilArena from './overfor-til-arena'
import Registrering from './registrering'
const fetcher = url => axios(url).then(result => result.data)

const Innhold = props => {
  const { data } = props
  return (
    <>
      <Sidetittel>Jomar Testursson</Sidetittel>
      <Innholdstittel>Besvarelse</Innholdstittel>
      <Registrering {...data.registrering} />
      <OverforTilArena id={data.registrering.id} />
    </>
  )
}

const Soknad = props => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/get-registrering`, fetcher)
  return  (
    <>
      {!data && <NavFrontendSpinner transparent/>}
      {data && <Innhold data={data} />}
    </>
  )
}

export default Soknad