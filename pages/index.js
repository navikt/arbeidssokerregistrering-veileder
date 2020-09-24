import Head from 'next/head'
import axios from 'axios'
import { Innholdstittel, Sidetittel, Normaltekst, Element, Systemtittel } from 'nav-frontend-typografi'
import OverforTilArena from '../components/overfor-til-arena'
import Registrering from '../components/registrering'
import NAVSPA from '@navikt/navspa';

const decoratorConfig = {
  appname: 'Arbeidssøkerregistrering-veileder'
}

Home.getInitialProps = async (ctx) => {
  const { data } = await axios(`http://localhost:3000${process.env.NEXT_PUBLIC_API_URL}/get-registrering`)
  return data
}

export default function Home (props) {

  const InternflateDecorator = NAVSPA.importer('internarbeidsflatefs');
  
  return (
    <div className='root'>
      <Head>
        <title>Arbeidssøkerregistrering - veileder</title>
      </Head>

      <InternflateDecorator {...decoratorConfig}/>

      <main>
        <Sidetittel>Jomar Testursson</Sidetittel>
        <Innholdstittel>Besvarelse</Innholdstittel>
        <Registrering {...props.registrering} />
        <OverforTilArena id={props.registrering.id} />
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
