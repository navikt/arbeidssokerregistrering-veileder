import Head from "next/head";
import HomeIkon from "../public/assets/svg/home.svg";
import { Hovedknapp } from "nav-frontend-knapper";
import { Sidetittel } from "nav-frontend-typografi";

export default function Home(props) {
  return (
    <div className="root">
      <Head>
        <title>Arbeidssøkerregistrering - veileder</title>
      </Head>

      <section>
        <div className="fo">
          <HomeIkon style={{ height: "20px" }} />
        </div>
      </section>

      <main>
        <Sidetittel>Jomar Testursson</Sidetittel>
        <Hovedknapp>
          <a>Overfør til Arena</a>
        </Hovedknapp>
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
      `}</style>
    </div>
  );
}
