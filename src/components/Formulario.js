import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    // Definir el state
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Función que guarda el nombre
    const nombreGasto = (e) => {
        guardarNombre( e.target.value );
    }

    // Función que guarda la cantidad
    const cantidadGasto = (e) => {
        guardarCantidad( parseInt(e.target.value,10) );
    }

    // Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if ( cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }

    return (
        <form
            onSubmit={ agregarGasto }
        >
            <h2>Agrega tus gastos aquí</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Ej. Transporte"
                    value={ nombre }
                    onChange={ nombreGasto }
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="form-control"
                    placeholder="Ej. 300"
                    value={ cantidad }
                    onChange={ cantidadGasto }
                />
            </div>

            <input 
                type="submit"
                className="btn-primary btn-block"
                value="Agregar Gasto"
            />
            
        </form>
    );
}

Formulario.protoTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
