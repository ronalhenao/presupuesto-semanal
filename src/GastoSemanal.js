import React, { useState } from 'react'
import { Pregunta } from './components/Pregunta'

export const GastoSemanal = () => {

    const [presupuesto, guardarPresupuesto] = useState(0);
    const [restante, guardarRestante] = useState(0);

    return (
        <div className="container">
            <header>
                <h1>Gasto semanal</h1>
            </header>
            <div className="contenido-principal contenido">
                <Pregunta 
                    guardarPresupuesto={ guardarPresupuesto }
                    guardarRestante={ guardarRestante }
                />
            </div>
            
        </div>
    )
}
