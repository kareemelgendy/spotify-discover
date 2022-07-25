import { Link } from "react-router-dom";
import { formatCategory } from "../util";
import styled from "styled-components";

const Tile = ({ type }) => {
  return (
    <Link to={`/category/${formatCategory(type)}`}>
      <Container>
        <img
          src={`/assets/icons/${formatCategory(type)}.svg`}
          alt={type}
          height={74}
          width={74}
        />
        <Title>{type}</Title>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  background: #111111;
  cursor: pointer;
  padding: 20px;

  &:hover {
    background: #1f1f1f;
  }

  &:active {
    background: #1b1b1b;
  }
`;

const Title = styled.span`
  text-transform: capitalize;
  white-space: wrap;
  font-weight: 800;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;

  @media (max-width: 720px) {
    font-size: 16px;
  }
`;

export default Tile;
