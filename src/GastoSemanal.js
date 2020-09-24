import React, { useState } from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';

export const GastoSemanal = () => {

    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);
    const [mostrarpregunta, actualizarPregunta] = useState(true);

    return (
        <div className="container">
            <header>
                <h1>Gasto semanal</h1>
            </header>
            <div className="contenido-principal contenido">
                { mostrarpregunta 
                    ?
                        <Pregunta 
                            guardarPresupuesto={ guardarPresupuesto }
                            guardarRestante={ guardarRestante }
                            actualizarPregunta={ actualizarPregunta }
                        />
                    :
                        <div className="d-flex">
                            <div class="w-50">
                                <Formulario />
                            </div>
                            <div class="w-50">2</div>
                        </div>
                }
            </div>
            
        </div>
    )
}
