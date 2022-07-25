import axios from "axios"
import axiosInstance from "./middleware"

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_REDIRECT_URI,
  REACT_APP_AUTH_ENDPOINT,
  REACT_APP_ENDPOINT
} = process.env

// App permissions
const scope = [
  "user-top-read",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-library-read",
  "user-follow-read"
].join(" ")

const params = {
  client_id: REACT_APP_CLIENT_ID,
  redirect_uri: REACT_APP_REDIRECT_URI,
  response_type: "token",
  show_dialog: true,
  scope: scope
}

const AUTH_URI = REACT_APP_AUTH_ENDPOINT + new URLSearchParams(params)

export const fetchUserData = async (filter) => {
  const endpoints = [
    "/profile",
    `/top-artists?time_range=${filter}`,
    `/top-tracks?time_range=${filter}`,
    `/playlists?limit=${20}`
  ]
  const data = endpoints.map((ep) => REACT_APP_ENDPOINT + ep)

  return axios.all(data.map((endpoint) => axiosInstance.get(endpoint)))
}

export default AUTH_URI
