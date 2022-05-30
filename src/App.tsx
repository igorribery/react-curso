import { ChangeEvent, useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName (e.target.value);
  }
  
  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName (e.target.value);
  }

  useEffect(() => {
    setFullName(`${name} ${lastName}`)
  }, [name, lastName]);


  return (
    <div className="flex flex-col">
      <input type="text" placeholder="Digite seu NOME" value={name} onChange={handleNameChange} />
      <input type="text" placeholder="Digite seu SOBRENOME" value={lastName} onChange={handleLastName} />
      <p>Nome Completo: {fullName}</p>
    </div>
  );
}

export default App;