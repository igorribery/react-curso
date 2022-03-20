import React, { useState } from 'react';

const App = () => {  
  const [name, setName] = useState('');
  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName( e.currentTarget.value );
  }

  return (
    <div>
    Nome:
    <input type='text' value={name} onChange={handleInput} />
    <hr/>
    Seu nome é: {name}

    </div>
  );

}


export default App;