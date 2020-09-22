import { useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import HomeIkon from '../public/assets/svg/home.svg'
import { Hovedknapp } from 'nav-frontend-knapper'
import { Innholdstittel, Sidetittel, Normaltekst, Element, Systemtittel } from 'nav-frontend-typografi'
import { AlertStripeSuksess, AlertStripeFeil } from 'nav-frontend-alertstriper'

Home.getInitialProps = async (ctx) => {
  const { data } = await axios('http://localhost:3000/arbeid/arbeidssokerregistrering-veileder/api/get-registrering')
  return data
}

export default function Home (props) {
  const [status, setStatus] = useState('IKKE_SENDT')
  const handleOverforing = async () => {
    const id = props.registrering.id
    const { data } = await axios(`${process.env.NEXT_PUBLIC_API_URL}/put-registrering?id=${id}`)
    const { status } = data
    setStatus(status)
  }

  const handleClick = (e) => {
    e.preventDefault()
    handleOverforing()
  }

  return (
    <div className='root'>
      <Head>
        <title>Arbeidssøkerregistrering - veileder</title>
      </Head>

      <section>
        <div className='fo'>
          <HomeIkon style={{ height: '20px' }} />
        </div>
      </section>

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
        {status === 'IKKE_SENDT' && <Hovedknapp onClick={handleClick}>Overfør til Arena</Hovedknapp>}
        {status === 'FEIL' && <AlertStripeFeil>Noe gikk galt under overføringen</AlertStripeFeil>}
        {status === 'SENDT' && <AlertStripeSuksess>Brukeren er overført</AlertStripeSuksess>}
      </main>

      <style jsx>{`
        .root {
          max-width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: auto;
        }
        
        section {
          justify-content: center;
          text-align: center;
        }
      `}
      </style>
    </div>
  )
}
