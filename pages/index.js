import Head from 'next/head'
import axios from 'axios'
import { Innholdstittel, Sidetittel, Normaltekst, Element, Systemtittel } from 'nav-frontend-typografi'
import OverforTilArena from '../components/overfor-til-arena'
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
        <Systemtittel>Bruker sendte inn arbeidssøkerregistreringen {new Date(props.registrering.opprettetDato).toLocaleDateString()}</Systemtittel>
        {props.registrering.teksterForBesvarelse.map(besvarelse => (
          <>
            <Element>{besvarelse.sporsmal}</Element>
            <Normaltekst>{besvarelse.svar}</Normaltekst>
          </>
        ))}
        <Element>Siste stilling</Element>
        <Normaltekst>{props.registrering.sisteStilling.label}</Normaltekst>
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
      `}
      </style>
    </div>
  )
}
