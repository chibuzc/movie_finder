import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  background: white;
  box-shadow: 10px 0 15px #e0e5ec;
  border-radius: 0.3rem;

  @media (min-width: 700px) {
    width: 45%;
    margin-right: 30px;
  }

  @media (min-width: 1000px) {
    margin-right: 35px;
  }
`;

const Image = styled.div<ImageProps>`
  height: 450px;
  width: 300px;
  margin: auto;
  background-image: url(${(props) => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.3rem
  border-top-right-radius: 0.3rem
`;

const Content = styled.div`
  padding: 16px;
  margin: auto;
  width: fit-content;
`;

const Text = styled.div<TextProps>`

  height: ${(props) => props.height && "3.6em"};

  font-size: ${(props) => (props.size && props.size) || "16px"};
  font-weight: ${(props) => (props.weight && props.weight) || ""};
  color: ${(props) => (props.color && props.color) || "#9D9FB0"};

  overflow: hidden;


`;

export { Container, Content, Image, Text };

interface ImageProps {
  image: string;
}

interface TextProps {
  height?: boolean;
  weight?: string;
  size?: string;
  relative?: boolean;
  color?: string;
}
