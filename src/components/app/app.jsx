import React from 'react';
import WelcomeScreen from '~/components/welcome-screen/welcome-screen';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorsCount, onClink} = props;
  return <WelcomeScreen
    gameTime={gameTime}
    errorsCount={errorsCount}
    onClink={onClink}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
  onClink: PropTypes.func
};

export default App;
