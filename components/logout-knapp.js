import { Hovedknapp } from 'nav-frontend-knapper'
import { signOut } from 'next-auth/client'

const LogoutKnapp = () => {
  return (
    <Hovedknapp onClick={signOut}>Logg ut</Hovedknapp>
  )
}

export default LogoutKnapp
