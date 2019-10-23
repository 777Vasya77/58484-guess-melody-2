import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/app/app.jsx';
import {ERRORS_COUNT, GAME_TIME} from '~/config/settings';
import {questions} from '~/mocks/questions';

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        questions={gameQuestions}
        gameTime={GAME_TIME}
        errorsCount={ERRORS_COUNT}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
