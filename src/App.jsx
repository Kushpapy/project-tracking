import styled from "styled-components";
import Content from "./Content";
import Header from "./Header";

const StyledApp = styled.div`
  &:before {
    content: " ";
    background-color: var(--light-grayish-blue);
    border-bottom-left-radius: 3.5rem;
    width: 49%;
    height: 52.5%;
    position: absolute;
    right: 0;
    opacity: 1;
    top: 0;
    z-index: -1;
  }
`;

function App() {
  return (
    <StyledApp>
      <Header></Header>
      <Content></Content>
    </StyledApp>
  );
}

export default App;
