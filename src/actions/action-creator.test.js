import * as ActionCreator from '~/actions/action-creator';
import {DECREMENT_TIMER, INCREMENT_MISTAKES, INCREMENT_QUESTION, RESET} from '~/actions/action-types';

describe(`Action creator work correctly`, function () {
  it(`Action creator for increment question return correct action`, () => {
    expect(ActionCreator.incrementQuestion()).toEqual({
      type: INCREMENT_QUESTION,
      step: 1
    });
  });

  it(`Action creator for increment mistakes return action with 0 mistake value`, () => {
    expect(ActionCreator.incrementMistakes([
      {genre: `reggae`, src: ``},
      {genre: `reggae`, src: ``},
    ], {genre: `reggae`, type: `genre`}, 0, 1)).toEqual({
      type: INCREMENT_MISTAKES,
      mistakes: 0,
    });
  });

  it(`Action creator for increment mistakes return action with 1 mistake value`, () => {
    expect(ActionCreator.incrementMistakes([
      {genre: `reggae`, src: ``},
      {genre: `reggae`, src: ``},
    ], {genre: `rock`, type: `genre`}, 0, 2)).toEqual({
      type: INCREMENT_MISTAKES,
      mistakes: 1,
    });
  });

  it(`Action creator for increment mistakes return reset action`, () => {
    expect(ActionCreator.incrementMistakes([
      {genre: `reggae`, src: ``},
      {genre: `reggae`, src: ``},
    ], {genre: `rock`, type: `genre`}, 1, 1)).toEqual({
      type: RESET
    });
  });

  it(`Action for decrement timer return correctly action`, () => {
    expect(ActionCreator.decrementTimer()).toEqual({type: DECREMENT_TIMER});
  });

  it(`Action for reset game return correctly action`, () => {
    expect(ActionCreator.resetGame()).toEqual({type: RESET});
  });

});

describe(`Function isMistakesLimitReached work correctly`, () => {
  it(`Function isMistakesLimitReached return TRUE if mistakes > maxMistakes`, () => {
    expect(ActionCreator.isMistakesLimitReached(2, 1)).toBeTruthy();
  });

  it(`Function isMistakesLimitReached return TRUE if mistakes === maxMistakes`, () => {
    expect(ActionCreator.isMistakesLimitReached(2, 2)).toBeTruthy();
  });

  it(`Function isMistakesLimitReached return FALSE if mistakes < maxMistakes`, () => {
    expect(ActionCreator.isMistakesLimitReached(1, 3)).toBeFalsy();
  });
});

describe(`Function isArtistAnswerCorrect work correctly`, () => {
  it(`If user answer correct, function return TRUE`, () => {
    expect(ActionCreator.isArtistAnswerCorrect([
      {
        artist: `Devon Church`,
        picture: ``
      }
    ], {
      song: {
        artist: `Devon Church`,
        src: ``
      }
    })).toBeTruthy();
  });

  it(`If user answer not correct, function return FALSE`, () => {
    expect(ActionCreator.isArtistAnswerCorrect([
      {
        artist: `Devon Church`,
        picture: ``
      }
    ], {
      song: {
        artist: `Some artist`,
        src: ``
      }
    })).toBeFalsy();
  });
});

describe(`Function isGenreAnswerCorrect work correctly`, () => {
  it(`If user answer correct, function return TRUE`, () => {
    expect(ActionCreator.isGenreAnswerCorrect([
      {genre: `reggae`, src: ``},
      {genre: `reggae`, src: ``},
    ], {genre: `reggae`})).toBeTruthy();
  });

  it(`If user answer not correct, function return FALSE`, () => {
    expect(ActionCreator.isGenreAnswerCorrect([
      {genre: `reggae`, src: ``},
      {genre: `reggae`, src: ``},
    ], {genre: `rock`})).toBeFalsy();
  });
});
