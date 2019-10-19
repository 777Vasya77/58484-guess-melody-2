import React from 'react';
import WelcomeScreen from '~/components/welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorsCount} = props;
  return <WelcomeScreen
    gameTime={gameTime}
    errorsCount={errorsCount}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
};

export default App;
