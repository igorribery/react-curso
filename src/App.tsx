import { useState } from "react";


const App = () => {
  const [padding, setPadding] = useState(5);

  const handleClick = () => {
    setPadding(20);
  }
  return (
    <div>
      <button onClick={handleClick} 
      style={{
        backgroundColor: '#FF0000', color: '#FFF', border: '0', padding: padding}}>Clique Aqui</button>
    </div>
  );


}

export default App;