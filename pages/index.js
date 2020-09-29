import Head from 'next/head'
import axios from 'axios'
import useSWR from 'swr'
import { Innholdstittel, Sidetittel } from 'nav-frontend-typografi'
import NavFrontendSpinner from 'nav-frontend-spinner'
import OverforTilArena from '../components/overfor-til-arena'
import Registrering from '../components/registrering'
import NAVSPA from '@navikt/navspa';
const fetcher = url => axios(url).then(result => result.data)
const decoratorConfig = {
  appname: 'Arbeidssøkerregistrering-veileder'
}

const Home = () => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/get-registrering`, fetcher)
  const InternflateDecorator = NAVSPA.importer('internarbeidsflatefs')
  
  if (!data) return <NavFrontendSpinner transparent/>
  
  return (
    <div className='root'>
      <Head>
        <title>Arbeidssøkerregistrering - veileder</title>
      </Head>

      <InternflateDecorator {...decoratorConfig}/>

      <main>
        <Sidetittel>Jomar Testursson</Sidetittel>
        <Innholdstittel>Besvarelse</Innholdstittel>
        <Registrering {...data.registrering} />
        <OverforTilArena id={data.registrering.id} />
      </main>

      <style jsx>{`
        .root {
          max-width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: auto;
        }
        main {
          width: 960px;
        }
      `}
      </style>
    </div>
  )
}

export default Home
