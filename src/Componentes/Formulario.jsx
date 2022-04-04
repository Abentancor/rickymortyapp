import React from 'react';
import { useFormulario } from '../Hooks/useFormulario';
import Swal from 'sweetalert2';

const Formulario = ({setNombrePersonaje}) => {

const [inputs, handleChange, reset] = useFormulario({
    nombre:'',
})

const {nombre} = inputs

const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(nombre)

    if(!nombre.trim()){
        return Swal.fire({
            title: 'error',
            text:'Escriba un personaje para buscar',
            icon:'error',
        })
    }

    setNombrePersonaje(nombre.trim().toLowerCase())
    reset()
}

  return <>
       <form onSubmit={handleSubmit}>
           <input
             type="text"
             placeholder='ingrese personaje'
             className='form-control mb-2'
             value={nombre}
             onChange={handleChange}
             name='nombre'
           />
           <button
            className='btn btn-dark mb-2'
            type='submit'
           >Buscar</button>
       </form>
       <button
            className="btn btn-success mt-2"
            onClick={() =>setNombrePersonaje("")}
            >Reiniciar
        </button>
  </>;
};

export default Formulario;
