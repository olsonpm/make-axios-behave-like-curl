module.exports = axios => {
  const curl = axios.create()

  curl.defaults.headers = { Accept: '*/*' }

  return curl
}
