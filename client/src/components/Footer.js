import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <a
        href="https://linkedin.com/in/elgendyk/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Code>
          <Image
            src="/assets/icons/user.svg"
            alt="github"
            height={24}
            width={24}
          />
          <span>Developed by Kareem E.</span>
        </Code>
      </a>
      <a
        href="https://github.com/kareemelgendy/spotify-wrapped"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Code>
          <Image
            src="/assets/icons/github.svg"
            alt="github"
            height={24}
            width={24}
          />
          <span>Source code</span>
        </Code>
      </a>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 1760px;
  flex-wrap: wrap;
  padding-top: 20px;
`;

const Code = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  white-space: nowrap;
  margin: 10px;
`;

const Image = styled.img`
  margin-right: 10px;
`;

export default Footer;
