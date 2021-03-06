import NextAuth from 'next-auth'
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
const options = {
  providers: [
    {
      id: 'oauth2',
      name: 'nav',
      type: 'oauth',
      version: '2.0',
      scope: 'openid',
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: `https://login.microsoftonline.com/${process.env.AZURE_APP_TENANT_ID}/oauth2/v2.0/token`,
      requestTokenUrl: `https://login.microsoftonline.com/${process.env.AZURE_APP_TENANT_ID}/oauth2/v2.0/authorize`,
      authorizationUrl: `https://login.microsoftonline.com/${process.env.AZURE_APP_TENANT_ID}/oauth2/v2.0/authorize?response_type=code`,
      profileUrl: 'https://graph.microsoft.com/v1.0/me',
      profile: (profile) => {
        return {
          id: profile.id,
          name: profile.displayName,
          email: profile.mail,
        }
      },
      clientId: process.env.AZURE_APP_CLIENT_ID,
      clientSecret: process.env.AZURE_APP_CLIENT_SECRET,
    },
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/database
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a seperate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true, 
    
    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens 
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw', 
    
    // Set to true to use encryption (default: false)
    // encryption: true,

    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks 
  callbacks: { 
    // signIn: async (user, account, profile) => { return Promise.resolve(true) },
    // redirect: async (url, baseUrl) => { return Promise.resolve(process.env.NEXTAUTH_REDIRECT_URL || baseUrl) },
    session: async (session, user) => {
      const  isSignedin = user ? true : false
      if (isSignedin) {
        session.accessToken = user.accessToken
      } 
      return Promise.resolve(session) 
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      const isSigning = user ? true : false
      if (isSigning) {
        token.accessToken = account.accessToken
      }
      return Promise.resolve(token) 
    }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: { },

  // Enable debug messages in the console if you are having problems
  debug: true,
}

export default (req, res) => NextAuth(req, res, options)