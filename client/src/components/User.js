import styled from "styled-components"

const User = ({ user }) => {
  const { username, followers, image } = user.profile
  const playlists = user.playlists.length

  return (
    <Container>
      <Image src={image} alt={username} />
      <Details>
        <Subtitle>Profile</Subtitle>
        <Name>{username}</Name>
        <Subtitle>
          <span>{followers} Followers</span>
          &nbsp;•&nbsp;
          <span>{playlists} Playlists</span>
        </Subtitle>
      </Details>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
`

const Image = styled.img`
  border-radius: 50%;
  width: 250px;

  @media (max-width: 720px) {
    width: 125px;
  }
`

const Name = styled.h1`
  font-weight: 900;
  font-size: 54px;
  margin: 10px 0;
`

const Details = styled.div`
  width: max-content;
  height: 100%;
  margin: 20px;
`

const Subtitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #aaaaaa;
`

export default User
