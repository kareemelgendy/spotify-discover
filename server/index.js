const express = require("express")
const axios = require("axios")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(cors())

// Authorization Code Flow Documentation
// https://developer.spotify.com/documentation/general/guides/authorization/code-flow/

// Spotify API Endpoints
// https://developer.spotify.com/documentation/web-api/reference/

app.get("/", (_, res) => {
  res.send("Spotify Wrapped")
})

// Returns the user's profile
app.get("/profile", (req, res) => {
  axios({
    method: "GET",
    url: "https://api.spotify.com/v1/me",
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      res.send({
        username: response.data.display_name,
        followers: response.data.followers.total,
        image: response.data.images.length
          ? response.data.images[0].url
          : "/assets/images/pfp.png"
      })
    })
    .catch((error) => res.send(error))
})

// Returns the user's playlists
app.get("/playlists", (req, res) => {
  const { limit, offset } = req.query

  axios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/playlists?limit=${limit || 20}`,
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      const playlists = response.data.items.map((playlist) => ({
        name: playlist.name,
        image: playlist.images[0].url,
        url: playlist.external_urls.spotify,
        tag: playlist.owner.display_name
      }))
      res.send(playlists)
    })
    .catch((error) => res.send(error))
})

app.listen(process.env.PORT || 8080, () => {
  console.log("Server live.")
})
