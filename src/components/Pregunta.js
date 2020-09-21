import React, { useState } from 'react';
import Error from './Error';

export const Pregunta = ({ guardarPresupuesto, guardarRestante }) => {

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = (e) => {
        // console.log(parseInt(e.target.value));
        guardarCantidad( parseInt(e.target.value, 10) );
    }

    // Submit para definir el presupuesto
    const agregarPresupueto = (e) => {
        e.preventDefault();
        // validar
        if ( cantidad < 1 || isNaN( cantidad )) {
            guardarError(true);
            return;
        }

        // si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null }

            <form
                onSubmit={ agregarPresupueto }
            >
                <input 
                    type="number"
                    className="btn-block"
                    placeholder="Coloca tu presupuesto"
                    onChange={ definirPresupuesto }
                />
                <input 
                    type="submit"
                    className="btn-primary btn-block"
                    value="Definir Presupuesto"
                />
            </form> 
        </>
    )
}
