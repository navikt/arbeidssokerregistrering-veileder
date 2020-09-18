const putRegistrering = async (request, response) => {
  const { id } = await request.query
  const status = Math.random() > 0.5 ? 'SENDT' : 'FEIL'
  response.json({ status, id })
}

export default putRegistrering
