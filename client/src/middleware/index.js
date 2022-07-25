import axios from "axios"
import { handleSignOut } from "../util"

const access_token = window.localStorage.getItem("token")
const token_expiry = window.localStorage.getItem("expiry")

const axiosInstance = axios.create({
  header: {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json"
  }
})

axiosInstance.interceptors.request.use(async (req) => {
  req.headers["Authorization"] = access_token
  const expiration = new Date(token_expiry)

  if (Date.now() < expiration) {
    return req
  } else {
    if (token_expiry) {
      console.log("token expired")
      handleSignOut()
    }
  }
})

export default axiosInstance
