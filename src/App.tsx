const App = () => {  

  const handleClick = () => {
    alert('O botão foi clicado!');
  }


  return (    
    <div>
      <button onClick={handleClick}>Clique Aqui</button>

    </div>
  );
}

export default App;