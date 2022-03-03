import styled from "styled-components";
const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;
const SideBarSection = styled.section`
  width: 20%;
  background-color: white;
  // box-shadow: 3px 0 15px #e5e9f0;
`;

const ContentSection = styled.div`
  height: 100%;
  width: 100%;
`;

const SearchBarSection = styled.section`
  height: 38px;
  width: 256px;
  margin: 20px 0;
  padding: 0 20px;
`;

const MoviesGridSection = styled.section`
  height: calc(100% - 88px);
  width: 100%;
  padding: 10px 50px;
  overflow-y: scroll;
`;

export {
  RootContainer,
  SideBarSection,
  ContentSection,
  SearchBarSection,
  MoviesGridSection,
};
