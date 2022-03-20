import { useState } from "react";

type HandleInputChange = React.ChangeEvent<HTMLInputElement>;

const App = () => {

  const [name, setName] = useState('João');
  const [lastName, setLastName] = useState('Silva');
  const [age, setAge] = useState(18);

  const handleName = (e: HandleInputChange) => {
    setName( e.target.value );
  }
  const handleLast = (e: HandleInputChange) => {
    setLastName( e.target.value );
  }
  const handleAge = (e: HandleInputChange) => {
    setAge( parseInt(e.target.value ));
  }
  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleName} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handleLast} />
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={handleAge} />
      </div>

      <hr/>

      Olá {`${name} ${lastName}`}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;