import { Link } from "react-router-dom"
import styled from "styled-components"

const Error = () => (
  <Container>
    <img src="/assets/icons/error.svg" alt="error" height={142} width={142} />
    <Title>Uh oh!</Title>
    <Subtitle>Page not found.</Subtitle>
    <Link to="/">
      <Button>Go back home</Button>
    </Link>
  </Container>
)

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 42px;
  margin: 0;
`

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
`

const Button = styled.button`
  background: #1db954;
  border-radius: 30px;
  padding: 15px 30px;
  border: none;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 800;
  font-size: 16px;
  color: white;
  cursor: pointer;
  margin: 10px;
`

export default Error
