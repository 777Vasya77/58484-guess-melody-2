import React from 'react';
import PropTypes from 'prop-types';

const Mistakes = (props) => {
  const {mistakes} = props;

  return (
    <div className="game__mistakes">
      {[...Array(mistakes).keys()].map((item, index) => <div key={index} className="wrong" />)}
    </div>
  );
};

Mistakes.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default Mistakes;
