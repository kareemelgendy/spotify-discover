import { formatName, formatTag } from "../util";
import styled from "styled-components";

const Element = ({ name, tag, image, link, rounded }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <Wrapper>
        <Container rounded={rounded}>
          <Image src={image} alt={name} rounded={rounded} />
          <Details rounded={rounded}>
            <Name>{formatName(name)}</Name>
            {tag && <Tag>{formatTag(tag)}</Tag>}
          </Details>
        </Container>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.div`
  height: 295px;
  display: flex;
  justify-content: center;
  background: #111111;
  border-radius: 5px;
  cursor: pointer;
  padding: 12px;

  &:hover {
    background: #1f1f1f;
  }

  &:active {
    background: #1b1b1b;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ rounded }) =>
    rounded ? "space-evenly" : "space-between"};
  max-width: 200px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ rounded }) => (rounded ? "50%" : "5px")};
`;

const Details = styled.div`
  text-align: ${({ rounded }) => (rounded ? "center" : "left")};
`;

const Name = styled.span`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 18px;
`;

const Tag = styled.p`
  text-transform: capitalize;
  margin: 0 0 10px 0;
  font-weight: 300;
`;

export default Element;
