import React from 'react';
import PropTypes from 'prop-types';
import Mistakes from '~/components/mistakes/mistakes';
import Timer from '~/components/timer/timer';

const GameHeader = (props) => {
  const {mistakes, gameTime, onGameTimeDecrement, onGameTimeEnded} = props;

  return (
    <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx={390} cy={390} r={370} style={{filter: `url(#blur)`, transform: `scaleY(-1)`, transformOrigin: `center`}} />
      </svg>

      <Timer
        gameTime={gameTime}
        onGameTimeEnded={onGameTimeEnded}
        onGameTimeDecrement={onGameTimeDecrement}
      />

      <Mistakes mistakes={mistakes} />
    </header>
  );
};

GameHeader.propTypes = {
  mistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  onGameTimeDecrement: PropTypes.func.isRequired,
  onGameTimeEnded: PropTypes.func.isRequired,
};

export default GameHeader;
