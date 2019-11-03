import {DECREMENT_TIMER, INCREMENT_MISTAKES, INCREMENT_QUESTION, RESET} from '~/actions/action-types';

export const isArtistAnswerCorrect = (userAnswer, question) => userAnswer[0].artist === question.song.artist;

export const isGenreAnswerCorrect = (userAnswer, question) => {
  return userAnswer.every((answer) => answer.genre === question.genre);
};

export const isMistakesLimitReached = (mistakes, maxMistakes) => mistakes + 1 >= maxMistakes;

export const incrementQuestion = () => ({
  type: INCREMENT_QUESTION,
  step: 1
});

export const incrementMistakes = (userAnswer, question, mistakes, maxMistakes) => {
  let answerIsCorrect = false;

  switch (question.type) {
    case `artist`:
      answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
      break;
    case `genre`:
      answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
      break;
  }

  if (!answerIsCorrect && isMistakesLimitReached(mistakes, maxMistakes)) {
    return {
      type: RESET,
    };
  }

  return {
    type: INCREMENT_MISTAKES,
    mistakes: answerIsCorrect ? 0 : 1,
  };

};

export const decrementTimer = () => ({type: DECREMENT_TIMER});

export const resetGame = () => ({type: RESET});
