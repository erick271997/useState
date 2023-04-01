
import './estilo/App.css';
import { useState } from 'react';
import NextTexto from './componete/NextTexto';

function App() { 
  const [nombre, SetNombre]= useState('jab');

   const cambair=()=>{
    
    SetNombre(' bob esponja')
    
   }

  //  otra funcion

   const [contador, Setcontador]= useState(0);


   const Aumentar=()=>{
   Setcontador(contador+1)
   }
 

   const Disminuir=()=>{
    Setcontador(contador-1)
   }
   const Borrar=()=>{
    Setcontador((0) + ".   Gracias")
   }

   //  otra funcion

   const [Numero1, SetNumero1]= useState();
   const [Numero2, SetNumero2]= useState();
   const [resultado, Setresultado]= useState();

   function sumar(){
Setresultado(Number (Numero1)+ Number (Numero2));
   }
   function modificar(e){
    SetNumero1(e.target.value);
   }
   function modificar2(e){
    SetNumero2(e.target.value);
   }




  return (
<div className="App">
     
      <h1>me llamo {nombre}</h1>
     <button onClick={cambair}> Cambair Nombre</button> 
     <div>


     <h1>Contador {contador}</h1>
     <button onClick={Aumentar}> Cambair Numero</button>
     <br/>
     <button onClick={Disminuir}> Disminuir Numero</button>
     <br/>
     <button onClick={Borrar}> Borrar</button>
     </div>
     <div>
      <p> Sumar </p>
      <input type='number' value={Numero1} onChange={modificar}/>
       +
      <input type='number' value={Numero2} onChange={modificar2}/>
      =
      <input type='number' value={resultado} readOnly/>
      <button onClick={sumar} className='suma' >Sumar</button>
     </div>
     <NextTexto/>
 </div>
  );
}

export default App;
