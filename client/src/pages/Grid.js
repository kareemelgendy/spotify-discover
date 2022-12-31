import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { formatCategory } from "../util"
import axiosInstance from "../middleware"
import Navbar from "../components/Navbar"
import Filterbar from "../components/Filterbar"
import Element from "../components/Element"
import Preloader from "../components/Preloader"
import Footer from "../components/Footer"
import styled from "styled-components"
import Header from "../components/Header"

const Grid = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("short_term")
  const params = useParams()
  const formattedCategory = formatCategory(params.category)

  useEffect(() => {
    const fetchData = () => {
      setLoading(true)
      axiosInstance
        .get(
          `${process.env.REACT_APP_ENDPOINT}/${params.category}?time_range=${filter}&limit=50`
        )
        .then((res) => {
          setData(res.data)
          setLoading(false)
        })
        .catch((err) => console.log(err))
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
            <Filterbar
              category={formattedCategory}
              filter={filter}
              setFilter={setFilter}
            />
          </Header>
          <Dashboard>
            {data.length ? (
              <ItemGrid>
                {data.map((item) => (
                  <Element
                    key={item.name}
                    name={item.name}
                    tag={item.tag}
                    image={item.image}
                    link={item.url}
                    rounded={formattedCategory === "top artists"}
                  />
                ))}
              </ItemGrid>
            ) : (
              <Placeholder>
                <img
                  src="/assets/icons/ghost.svg"
                  alt="ghost"
                  height={75}
                  width={75}
                />
                <Title>Ghost Town</Title>
                <Subtitle>No {formattedCategory} found.</Subtitle>
              </Placeholder>
            )}
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

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-gap: 10px;
  overflow: hidden;
`

const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 28px;
  margin: 10px 0 0 0;
`

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
`

export default Grid
