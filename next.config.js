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
        destination: '/api/is-alive'
      },
      {
        source: '/isReady',
        destination: '/api/is-ready'
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
