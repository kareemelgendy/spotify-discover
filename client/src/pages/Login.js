import AUTH_URI from "../spotify"
import styled from "styled-components"

const Login = () => {
  const handleLogin = () => (window.location.href = AUTH_URI)

  return (
    <Container>
      <img
        src="/assets/icons/logo.svg"
        alt="spotify"
        height={142}
        width={142}
      />
      <Title>Spotify Profile</Title>
      <Subtitle>Learn more about your listening patterns.</Subtitle>
      <Button onClick={handleLogin}>Login with Spotify</Button>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
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
  background: #1ed760;
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

export default Login
