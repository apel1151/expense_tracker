import styled from "styled-components";
import HomeComponent from "./module/home";

const Container = styled.div `
    display: flex;
    flex-direction: column;
    font-family: Montserrat;
    align-items: center;
    margin: 30px 0 10px;

`
const Header = styled.span`
    color: green;
    font-size: 25px;
    font-weight: bold;
`
const Horzontal = styled.div`
    width: 50%;
    border: 1px solid green;
`
function App() {
  return (
   
      <Container>
        <Header> Expense Tracker</Header>
        <Horzontal></Horzontal>
        <HomeComponent></HomeComponent>
      </Container>
    
  );
}

export default App;
