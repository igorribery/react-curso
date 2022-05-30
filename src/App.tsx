<<<<<<< HEAD
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
=======
import { useState } from 'react';
import styles from './App.module.css';
import powered from './assets/powered.png';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleButtonCalc = () => {
    if(heightField && weightField) {

    } else {
      alert('Digite todos os campos.')
    }
  }

  return (
    <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img src={powered} alt="" width={150} />
          </div>
        </header>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu IMC</h1>
            <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

            <input 
            type='number'
            placeholder='Digite a sua altura: Ex: 1.5(em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            />

            <input 
            type='number'
            placeholder='Digite o seu peso: Ex: 75.3(em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            />
            
            <button onClick={handleButtonCalc}>Calcular</button>
           
          </div>
          <div className={styles.rightSide}>
            ...
        </div> 
      </div>
    </div>
  )
>>>>>>> 63b152708955d93eeafb1d32697f8d6e42e5bb2e
}

export default App;