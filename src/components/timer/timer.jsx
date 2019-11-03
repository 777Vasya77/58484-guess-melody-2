import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const getTimerValue = (time) => {
  const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
  const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);

  return {minutes, seconds};
};

class Timer extends PureComponent {

  constructor(props) {
    super(props);

    this.intervalId = 0;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this._tick(), 1000);
  }

  _tick() {
    const {onGameTimeDecrement, onGameTimeEnded, gameTime} = this.props;
    if (!gameTime) {
      clearInterval(this.intervalId);
      onGameTimeEnded();
      return false;
    }

    return onGameTimeDecrement();
  }

  render() {
    const {gameTime} = this.props;
    const {seconds, minutes} = getTimerValue(gameTime);
    return (
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{minutes}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{seconds}</span>
      </div>
    );
  }
}

Timer.propTypes = {
  gameTime: PropTypes.number.isRequired,
  onGameTimeEnded: PropTypes.func.isRequired,
  onGameTimeDecrement: PropTypes.func.isRequired,
};

export default Timer;
