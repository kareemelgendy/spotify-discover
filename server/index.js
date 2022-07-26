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

// Returns the user's top tracks
app.get("/top-tracks", (req, res) => {
  const { limit, offset, time_range } = req.query

  axios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/top/tracks?limit=${
      limit || 20
    }&offset=${offset || 5}&time_range=${time_range || `medium_term`}`,
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      const tracks = response.data.items.map((track) => ({
        name: track.name,
        image: track.album.images[0].url,
        url: track.external_urls.spotify,
        tag: track.artists.map((artist) => artist.name)
      }))
      res.send(tracks)
    })
    .catch((error) => res.send(error))
})

// Returns the user's top artists
app.get("/top-artists", (req, res) => {
  const { limit, offset, time_range } = req.query
  axios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/top/artists?limit=${
      limit || 20
    }&offset=${offset || 5}&time_range=${time_range || `medium_term`}`,
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      const artists = response.data.items.map((artist) => ({
        name: artist.name,
        image: artist.images[0].url,
        url: artist.external_urls.spotify
      }))
      res.send(artists)
    })
    .catch((error) => res.send(error))
})

// Returns the user's saved tracks
app.get("/saved-tracks", (req, res) => {
  const { limit, offset } = req.query
  axios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/tracks?limit=${limit || 20}&offset=${
      offset || 5
    }`,
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      const data = response.data.items.map((item) => ({
        name: item.track.name,
        image: item.track.album.images[0].url,
        url: item.track.external_urls.spotify,
        tag: item.track.artists.map((artist) => artist.name)
      }))
      res.send(data)
    })
    .catch((error) => res.send(error))
})

// Returns the user's saved albums
app.get("/saved-albums", (req, res) => {
  const { limit, offset } = req.query
  axios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/albums?limit=${limit || 20}&offset=${
      offset || 5
    }`,
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      const data = response.data.items.map((item) => ({
        name: item.album.name,
        image: item.album.images[0].url,
        url: item.album.external_urls.spotify,
        tag: item.album.artists.map((artist) => artist.name).join(", ")
      }))

      res.send(data)
    })
    .catch((error) => res.send(error))
})

// Returns the user's saved shows
app.get("/saved-shows", (req, res) => {
  const { limit, offset } = req.query
  axios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/shows?limit=${limit || 20}&offset=${
      offset || 5
    }`,
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      const data = response.data.items.map((item) => ({
        name: item.show.name,
        image: item.show.images[0].url,
        url: item.show.external_urls.spotify
      }))
      res.send(data)
    })
    .catch((error) => res.send(error))
})

// Returns the user's saved episodes
app.get("/saved-episodes", (req, res) => {
  const { limit, offset } = req.query
  axios({
    method: "GET",
    url: `https://api.spotify.com/v1/me/episodes?limit=${limit || 20}&offset=${
      offset || 5
    }`,
    headers: {
      Authorization: `Bearer ${req.headers.authorization}`,
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      const data = response.data.items.map((item) => ({
        name: item.episode.name,
        tag: item.episode.show.name,
        image: item.episode.images[0].url,
        url: item.episode.external_urls.spotify
      }))
      res.send(data)
    })
    .catch((error) => res.send(error))
})
