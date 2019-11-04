import {DECREMENT_TIMER, INCREMENT_MISTAKES, INCREMENT_QUESTION, RESET} from '~/actions/action-types';
import {GAME_TIME, ERRORS_COUNT} from '~/config/settings';
import {questions} from '~/mocks/questions';

const gameTime = GAME_TIME * 60;

const initialState = {
  questions,
  step: -1,
  mistakes: 0,
  gameTime,
  errorsCount: ERRORS_COUNT,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT_QUESTION:
      return Object.assign({}, state, {
        step: state.step + 1
      });
    case INCREMENT_MISTAKES:
      return Object.assign({}, state, {
        mistakes: state.mistakes + 1
      });
    case DECREMENT_TIMER:
      return Object.assign({}, state, {
        gameTime: state.gameTime - 1
      });
    case RESET:
      return Object.assign({}, initialState);

    default:
      return state;
  }
};

export default reducer;
