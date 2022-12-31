import styled from "styled-components"

const Header = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  background: #111111;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Header
