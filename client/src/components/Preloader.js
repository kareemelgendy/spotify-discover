import styled from "styled-components"

const Preloader = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
)

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

const Spinner = styled.div`
  display: block;
  margin: auto;
  width: 50px;
  height: 50px;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-bottom-color: white;
  border-radius: 50%;
  animation: spin 0.75s infinite linear;
`

export default Preloader
