import Head from 'next/head'
import { useSession } from 'next-auth/client'
import NAVSPA from '@navikt/navspa';
import Soknad from '../components/soknad'
import LoginKnapp from '../components/login-knapp';
import LogoutKnapp from '../components/logout-knapp';
const decoratorConfig = {
  appname: 'Arbeidssøkerregistrering-veileder'
}

const Home = () => {
  const [ session, loading ] = useSession()
  const InternflateDecorator = NAVSPA.importer('internarbeidsflatefs')

  return (
    <div className='root'>
      <Head>
        <title>Arbeidssøkerregistrering - veileder</title>
      </Head>

      {session && <InternflateDecorator {...decoratorConfig}/>}

      <main>
        {session && <Soknad />}
        {session && <LogoutKnapp />}
        {!session && <LoginKnapp />}
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
