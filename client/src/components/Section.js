import { Link } from "react-router-dom";
import { formatCategory } from "../util";
import styled from "styled-components";
import Element from "./Element";

const Section = ({ section, items }) => {
  return (
    <>
      <SectionHeader>
        <Title>{section}</Title>
        <Link to={`/category/${formatCategory(section)}`}>
          <Button>See more</Button>
        </Link>
      </SectionHeader>
      <Elements>
        {items &&
          items.map((item) => (
            <Element
              key={item.name}
              name={item.name}
              tag={item.tag}
              image={item.image}
              link={item.url}
              rounded={section === "Top Artists"}
            />
          ))}
      </Elements>
    </>
  );
};

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-weight: 800;
  text-transform: capitalize;
`;

const Button = styled.div`
  border-radius: 5px;
  font-weight: 600;
  padding: 10px;
  color: white;

  &:hover {
    background: #111111;
  }

  &:active {
    background: #1f1f1f;
  }
`;

const Elements = styled.div`
  height: 295px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 10px;
  overflow: hidden;
`;

export default Section;
