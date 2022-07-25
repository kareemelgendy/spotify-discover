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

app.listen(process.env.PORT || 8080, () => {
  console.log("Server live.")
})
