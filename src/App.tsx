import * as C from './AppStyles';

const App = () => {
  
  return (
    <C.Container>
      <span>Texto do componente.</span>

      <a href="" className='Link'>Link qualquer</a>


      <C.Botaocss bg='#FF0000' small>Botão grande</C.Botaocss>
      <C.Botaocss bg='#00FF00' small>Botão pequeno</C.Botaocss>
    </C.Container>
  );
}

export default App;