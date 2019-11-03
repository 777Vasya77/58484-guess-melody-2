import {DECREMENT_TIMER, INCREMENT_MISTAKES, INCREMENT_QUESTION, RESET} from '~/actions/action-types';
import {GAME_TIME} from '~/config/settings';

const gameTime = GAME_TIME * 60;

const initialState = {
  step: -1,
  mistakes: 0,
  gameTime
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT_QUESTION:
      return Object.assign({}, state, {
        step: state.step + action.step
      });
    case INCREMENT_MISTAKES:
      return Object.assign({}, state, {
        mistakes: state.mistakes + action.mistakes
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
