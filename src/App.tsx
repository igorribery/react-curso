// import { Container, Botaocss } from './AppStyles';  // importando individualmente
import * as C from './AppStyles'; // importa tudo de uma vez (maneira mais fácil)

const App = () => {
  
  return (
    
    <C.Container>
      Texto do componente.
      <C.Botaocss>Clique aqui</C.Botaocss>
    </C.Container>
  );
}

export default App;