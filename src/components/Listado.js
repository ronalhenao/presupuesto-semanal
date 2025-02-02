import React from 'react';
import Gasto from './Gastos';
import PropTypes from 'prop-types';

export const Listado = ({ gastos }) => {
    return(
        <div className="gastos-realizados pt-4 pt-md-0">
            <h2>Listado</h2>
            { gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={ gasto }
                />
            ))}
        </div>
    )
};

Listado.protoTypes = {
    gastos: PropTypes.array.isRequired
}
