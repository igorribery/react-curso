import { useState } from 'react';

const App = () => {  
  const [name, setName] = useState('Bonieky');

  const handleClick = () => {
    setName('Pedro');
  }


  return (    
    <div>
      meu nome é {name}.
      <button onClick={handleClick}>Clique Aqui</button>
    </div>
  );
}

export default App;