const withLess = require('@zeit/next-less')
const withReactSvg = require('next-react-svg')
const path = require('path')

const navFrontendModuler = Object.keys(
  require('./package.json').dependencies
).filter((it) => it.startsWith('nav-frontend'))

const withTranspileModules = require('next-transpile-modules')(
  navFrontendModuler
)

module.exports = {
  async rewrites() {
    return [
      {
        source: '/isAlive',
        destination: '/api/alive-and-ready'
      },
      {
        source: '/oauth2/callback',
        destination: '/api/oauth2/callback'
      },
      {
        source: '/isReady',
        destination: '/api/alive-and-ready'
      }
    ]
  },
  ...withTranspileModules(
    withLess(
      withReactSvg({
        include: path.resolve(__dirname, 'public/assets/svg'),
        reactStrictMode: true,
        basePath: process.env.BASE_PATH
      })
    )
  )
}
