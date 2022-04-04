import React, { useEffect, useState } from 'react';
import Formulario from './Componentes/Formulario';
import PintarDatos from './Componentes/PintarDatos';

const App = () => {

    const[nombrePersonaje, setNombrePersonaje] = useState("")

    useEffect(()=>{
        if(localStorage.getItem('nombreApi')){
            setNombrePersonaje(JSON.parse(localStorage.getItem('nombreApi')))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("nombreApi", JSON.stringify(nombrePersonaje));
    }, [nombrePersonaje]);

  return <div className='container'>
      <h1>App Rick & Morty</h1>
      <Formulario setNombrePersonaje= {setNombrePersonaje}/>
      <PintarDatos nombrePersonaje= {nombrePersonaje}/>
  </div>;
};

export default App;
