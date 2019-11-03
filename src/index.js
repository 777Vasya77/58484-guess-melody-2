import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/app/app.jsx';
import {ERRORS_COUNT} from '~/config/settings';
import {questions} from '~/mocks/questions';
import {createStore} from 'redux';
import reducer from '~/reducers/reducer';
import {Provider} from 'react-redux';

const init = (gameQuestions) => {
  const store = createStore(reducer);

  ReactDOM.render(
      <Provider store={store}>
        <App
          questions={gameQuestions}
          errorsCount={ERRORS_COUNT}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(questions);
