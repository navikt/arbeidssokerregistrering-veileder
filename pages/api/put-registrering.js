const putRegistrering  = async (request, response) => {
  const { id } = await request.body
  response.json({ success: true, id })
}

export default putRegistrering
