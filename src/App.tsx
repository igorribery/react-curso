import { Pessoa } from './components/Pessoa'

const App = () => {  
  let list = [
    {name: 'Bonieky', age: 20},
    {name: 'João', age: 21},
    {name: 'Pedro', age: 35},
    {name: 'Samanta', age: 15},
    {name: 'Maria', age: 40}
  ];

 return (
   <div>
     <h2>Lista de presença</h2>
     <ul>
       {list.map((item, index)=>(
         <Pessoa key={index} data={item}/>
       ))}
     </ul>
   </div>
 )
}

export default App;