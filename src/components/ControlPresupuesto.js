import React from 'react'

export const ControlPresupuesto = ({ presupuesto, restante }) => {
    return (
        <>
           <div className="alert alert-primary">
               Presupuesto: $ { presupuesto }
            </div>
            <div className="alert ">
                Restante: $ { restante }
            </div>
        </>
    )
}
