import * as C from './AppStyles';

const App = () => {
  
  return (
    
    <C.Container bgColor='#000000'>
      Texto do componente.
      <C.Botaocss bg='#FF0000'>Botão grande</C.Botaocss>
      <C.Botaocss bg='#00FF00' small>Botão pequeno</C.Botaocss>
    </C.Container>
  );
}

export default App;