import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ mensaje }) => (
    <p className="alert alert-danger errror">{ mensaje }</p>
);

Error.protoTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;
