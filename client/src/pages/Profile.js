import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Filterbar from "../components/Filterbar"
import Tile from "../components/Tile"
import Section from "../components/Section"
import Preloader from "../components/Preloader"
import Footer from "../components/Footer"
import styled from "styled-components"
import { fetchUserData } from "../spotify"
import User from "../components/User"

const Profile = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("short_term")

  const sections = ["Top Artists", "Top Tracks", "Playlists"]
  const tiles = [
    "Saved Tracks",
    "Saved Albums",
    "Saved Episodes",
    "Saved Shows"
  ]

  // TODO - clean up + bandwidth
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const userData = await fetchUserData(filter)
      setUser({
        term: filter,
        profile: userData[0].data,
        artists: userData[1].data,
        tracks: userData[2].data,
        playlists: userData[3].data
      })
      setLoading(false)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

  return (
    <Container>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header>
            <Navbar />
            <User user={user} />
            <Filterbar filter={filter} setFilter={setFilter} />
          </Header>
          <Dashboard>
            <Tiles>
              {tiles.map((tile) => (
                <Tile key={tile} type={tile} />
              ))}
            </Tiles>
            {sections.map((section, index) => (
              <Section
                key={section}
                section={section}
                items={Object.values(user)[index + 2]}
              />
            ))}
            <Footer />
          </Dashboard>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`

const Dashboard = styled.main`
  max-width: 1760px;
  padding: 20px;
  margin: auto;
`

const Tiles = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  margin: 10px 0;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default Profile
