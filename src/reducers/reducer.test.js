import reducer from '~/reducers/reducer';
import {DECREMENT_TIMER, INCREMENT_MISTAKES, INCREMENT_QUESTION, RESET} from '~/actions/action-types';
import {questions} from '~/mocks/test-mocks';
import {ERRORS_COUNT} from '~/config/settings';

const gameTime = 7 * 60;

const INITIAL_STATE = {
  questions,
  step: -1,
  mistakes: 0,
  gameTime,
  errorsCount: ERRORS_COUNT,
};

describe(`Reducer work correctly`, () => {
  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer(INITIAL_STATE, {
      type: INCREMENT_QUESTION
    })).toEqual({
      questions,
      step: 0,
      gameTime,
      mistakes: 0,
      errorsCount: ERRORS_COUNT,
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer(INITIAL_STATE, {
      type: INCREMENT_MISTAKES
    })).toEqual({
      questions,
      gameTime,
      step: -1,
      mistakes: 1,
      errorsCount: ERRORS_COUNT
    });
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      questions,
      step: 2,
      mistakes: 2,
      gameTime,
      errorsCount: 1,
    }, {
      type: RESET
    })).toEqual(INITIAL_STATE);
  });

  it(`Reducer should decrement time of timer by 1 sec`, () => {
    expect(reducer({
      questions,
      step: -1,
      mistakes: 0,
      errorsCount: 1,
      gameTime: 200
    }, {
      type: DECREMENT_TIMER
    })).toEqual({
      questions,
      step: -1,
      mistakes: 0,
      errorsCount: 1,
      gameTime: 199
    });
  });
});
