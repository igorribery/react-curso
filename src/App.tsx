import styled from 'styled-components';

const Container = styled.div`
  background-color: blue;
  color: white;
  padding: 20px
`;

const Botao = styled.button`
  font-size: 30px;
  padding: 10px;
  margin-left: 35px;
`;

const App = () => {
  
  return (
    
    <Container>
      Texto do componente.
      <Botao>Clique aqui</Botao>
    </Container>
  );

}

export default App;