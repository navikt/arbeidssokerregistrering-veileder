const isReady = (request, response) => {
  response.status(200)
  response.end()
}

export default isReady
