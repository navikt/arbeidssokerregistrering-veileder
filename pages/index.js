import Head from 'next/head'
import HomeIkon from '../public/assets/svg/home.svg'
import {Hovedknapp} from 'nav-frontend-knapper'
import {Innholdstittel, Sidetittel, Normaltekst, Element, Systemtittel} from 'nav-frontend-typografi'

Home.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/get-registrering')
    return await res.json();
}

export default function Home(props) {

    const handleOverforing = () => {
        const id = props.registrering.id;
        const url =
        const res = await fetch()
    }

    return (
        <div className='root'>
            <Head>
                <title>Arbeidssøkerregistrering - veileder</title>
            </Head>

            <section>
                <div className='fo'>
                    <HomeIkon style={{height: '20px'}}/>
                </div>
            </section>

            <main>
                <Sidetittel>Jomar Testursson</Sidetittel>
                <Innholdstittel>Besvarelse</Innholdstittel>
                <Systemtittel>Bruker sendte inn arbeidssøkerregistreringen {new Date(props.registrering.opprettetDato).toLocaleDateString()}</Systemtittel>
                {props.registrering.teksterForBesvarelse.map((besvarelse => (
                    <>
                        <Element>{besvarelse.sporsmal}</Element>
                        <Normaltekst>{besvarelse.svar}</Normaltekst>
                    </>
                )))}
                <Element>Siste stilling</Element>
                <Normaltekst>{props.registrering.sisteStilling.label}</Normaltekst>
                <Hovedknapp onClick={handleOverforing}>Overfør til Arena</Hovedknapp>
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
