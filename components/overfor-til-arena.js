import axios from 'axios'
import { useState } from 'react'
import { AlertStripeSuksess, AlertStripeFeil } from 'nav-frontend-alertstriper'
import { Hovedknapp } from 'nav-frontend-knapper'

const OverforTilArena  = props => {
  const { id } = props
  const [status, setStatus] = useState('IKKE_SENDT')

  const handleOverforing = async () => {
    const { data } = await axios(`/api/put-registrering`)
    const { status } = data
    setStatus(status)
  }

  return (
    <>
      {status === 'IKKE_SENDT' && <Hovedknapp onClick={handleOverforing}>Overfør til Arena</Hovedknapp>}
      {status === 'FEIL' && <AlertStripeFeil>Noe gikk galt under overføringen</AlertStripeFeil>}
      {status === 'SENDT' && <AlertStripeSuksess>Brukeren er overført</AlertStripeSuksess>}
    </>
  )
}

export default OverforTilArena
