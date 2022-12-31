import { formatCategory, isFilterable } from "../util"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Filterbar = ({ category, filter, setFilter }) => {
  const periods = {
    "This month": "short_term",
    "Past 6 Months": "medium_term",
    "All Time": "long_term"
  }

  return (
    <Container>
      <Path>
        <Link to="/">
          <h3>Profile</h3>
        </Link>
        {category && (
          <>
            <span>&nbsp;/&nbsp;</span>
            <Link to={`/category/${formatCategory(category)}`}>
              <h3>{category}</h3>
            </Link>
          </>
        )}
      </Path>
      {isFilterable(category) && (
        <div>
          {Object.entries(periods).map((period) => (
            <Button
              type="button"
              key={period[0]}
              active={filter === period[1]}
              onClick={() => setFilter(period[1])}
            >
              {period[0]}
            </Button>
          ))}
        </div>
      )}
    </Container>
  )
}

const Container = styled.div`
  max-width: 1760px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  flex-wrap: wrap;
`

const Path = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  margin-right: 20px;
`

const Button = styled.button`
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  margin-left: 10px;
  font-weight: 800;
  font-size: 14px;
  background: ${({ active }) => (active ? "#1ed760" : "#333333")};

  &:hover {
    background: ${({ active }) => (active ? "#1db954" : "#444444")};
  }

  &:active {
    background: ${({ active }) => (active ? "#1ed760" : "#555555")};
  }

  @media (max-width: 720px) {
    font-size: 12px;
    padding: 10px 12px;
    margin: 0;

    :not(:last-child) {
      margin-right: 7px;
    }
  }
`

export default Filterbar
