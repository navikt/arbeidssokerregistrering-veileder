const putRegistrering  = async (request, response) => {
  const { id } = await request.query
  response.json({ success: true, id })
}

export default putRegistrering
