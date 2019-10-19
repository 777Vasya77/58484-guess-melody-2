import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/app/app.jsx';
import {ERRORS_COUNT, GAME_TIME} from '~/config/settings';

const init = () => {
  ReactDOM.render(
      <App
        gameTime={GAME_TIME}
        errorsCount={ERRORS_COUNT}
        onClick={() => {}}
      />,
      document.querySelector(`#root`)
  );
};

init();
