import { Normaltekst, Element, Systemtittel } from 'nav-frontend-typografi'

const Besvarelse = props => {
  const { sporsmal, svar } = props
  return (
    <>
      <Element>{sporsmal}</Element>
      <Normaltekst>{svar}</Normaltekst>
    </>
  )
}

const Registrering = props => {
  const { opprettetDato, teksterForBesvarelse, sisteStilling } = props
  return (
    <>
      <Systemtittel>Bruker sendte inn arbeidssøkerregistreringen {new Date(opprettetDato).toLocaleDateString()}</Systemtittel>
        {teksterForBesvarelse && teksterForBesvarelse.map(besvarelse => <Besvarelse {...besvarelse} key={besvarelse.sporsmalId}/>)}
        <Element>Siste stilling</Element>
        <Normaltekst>{sisteStilling.label}</Normaltekst>
    </>
  )
}

export default Registrering
