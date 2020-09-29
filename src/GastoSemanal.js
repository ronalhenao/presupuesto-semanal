import React, { useState } from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { ControlPresupuesto } from './components/ControlPresupuesto';


export const GastoSemanal = () => {

    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);
    const [mostrarpregunta, actualizarPregunta] = useState(true);
    const [gastos, guardarGastos] = useState([]);

    // Cuando agregamos un nuevo gasto
    const agregarNuevoGasto = gasto => {
        guardarGastos([
            ...gastos,
            gasto
        ])
    }

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
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Formulario 
                                    agregarNuevoGasto={ agregarNuevoGasto }
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <Listado 
                                    gastos={ gastos }
                                />
                                <ControlPresupuesto 
                                    presupuesto={ presupuesto }
                                    restante={ restante }
                                />
                            </div>
                        </div>
                }
            </div>
            
        </div>
    )
}
