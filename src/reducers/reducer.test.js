import reducer from '~/reducers/reducer';
import {DECREMENT_TIMER, INCREMENT_MISTAKES, INCREMENT_QUESTION, RESET} from '~/actions/action-types';

const gameTime = 7 * 60;

const INITIAL_STATE = {
  step: -1,
  mistakes: 0,
  gameTime
};

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer(INITIAL_STATE, {
      type: INCREMENT_QUESTION,
      step: 1
    })).toEqual({
      gameTime,
      step: 0,
      mistakes: 0,
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer(INITIAL_STATE, {
      type: INCREMENT_MISTAKES,
      mistakes: 1
    })).toEqual({
      gameTime,
      step: -1,
      mistakes: 1,
    });
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      step: 100,
      mistakes: 300
    }, {
      type: RESET
    })).toEqual(INITIAL_STATE);
  });

  it(`Reducer should decrement time of timer by 1 sec`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
      gameTime: 200
    }, {
      type: DECREMENT_TIMER
    })).toEqual({
      step: -1,
      mistakes: 0,
      gameTime: 199
    });
  });
});
