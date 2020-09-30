import { Hovedknapp } from 'nav-frontend-knapper'
import { signIn } from 'next-auth/client'

const LoginKnapp = () => {
  return (
    <Hovedknapp onClick={() => signIn('oauth2')}>Logg inn</Hovedknapp>
  )
}

export default LoginKnapp
