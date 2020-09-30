import React, { useEffect, useState } from 'react';
import { Pregunta } from './components/Pregunta';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { ControlPresupuesto } from './components/ControlPresupuesto';


export const GastoSemanal = () => {

    // Definir el state
    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);
    const [mostrarpregunta, actualizarPregunta] = useState(true);
    const [gastos, guardarGastos] = useState([]);
    const [gasto, guardarGasto] = useState({});
    const [creargasto, guardarCrearGasto] = useState(false);

    // UseEffect que actualiza el restante
    useEffect(() => {
        if ( creargasto ) {
            // Agrega el nuevo presupuesto
            guardarGastos([
                ...gastos,
                gasto
            ]);

            // Resta del presupuesto actual
            const presupuestoRestante = restante - gasto.cantidad;
            guardarRestante(presupuestoRestante);

            // Resetear a false
            guardarCrearGasto(false);
        }
    }, [gasto, creargasto, gastos, restante]);

    // Cuando agregamos un nuevo gasto
    // const agregarNuevoGasto = gasto => {
    // }

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
                                    guardarGasto={ guardarGasto }
                                    guardarCrearGasto={ guardarCrearGasto }
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
