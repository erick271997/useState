import React from "react";
import '../estilo/NextTexto.css';
import { useState } from "react";

const NextTexto=()=>{
    const reyesGodos=[
        {
          nombre: "Ataúlfo",
          aficion: "comer toros sin pelar",
        },{
          nombre: "Recesvinto",
          aficion: "leer a Hegel en arameo",
        },{
          nombre: "Teodorico",
          aficion: "la cría del escarabajo en almíbar"
        }
      ]

      function Cambair(){
        setcontador(contador+1);

if(contador+1>=reyesGodos.length){
    // length cuanto las propiedades que hay en este caso reyesGodos hay 3
    setcontador(0)
}


        setmensaje(<h2>La aficion principal de <span className="rojo">
            {reyesGodos[contador].nombre}</span> es <span className="verde">
                {reyesGodos[contador].aficion}
                </span></h2>)
      }


      const[contador, setcontador]= useState(0);
      const [mensaje,setmensaje]=useState('El mensaje del Dia');
    return(
<div className="nex">
    <div>{mensaje}</div>

    <div className="center">
      <br/>
<button className="btnNex" onClick={Cambair}>Ver siguiente</button>

    </div>
    

</div>
    )
}


export default NextTexto;