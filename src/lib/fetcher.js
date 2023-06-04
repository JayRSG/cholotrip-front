import axios from "./axios"

export const fetcher = async (prop) => {
  const { url, args } = prop

  if (args == "") { return null }
  else {
    return await axios.get(url, { params: args })
      .then((result) => result.data)
      .catch((error) => {
        throw error
      })
  }
}