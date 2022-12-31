import { Link } from "react-router-dom"
import styled from "styled-components"
import { handleSignOut } from "../util"

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <Logo>
          <Image
            src="/assets/icons/logo_light.svg"
            alt="spotify logo"
            height={36}
            width={36}
          />
          <span>Spotify</span>
        </Logo>
      </Link>
      <Button type="button" onClick={handleSignOut}>
        Logout
      </Button>
    </Container>
  )
}

const Container = styled.nav`
  max-width: 1760px;
  background: #111111;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: auto;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: 700;
`

const Image = styled.img`
  margin-right: 10px;
`

const Button = styled.button`
  background: #1ed760;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  margin-left: 10px;
  font-weight: 800;
  font-size: 14px;

  &:hover {
    background: #1db954;
  }

  &:active {
    background: #1ed760;
  }
`
export default Navbar
