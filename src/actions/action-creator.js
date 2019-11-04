import {DECREMENT_TIMER, INCREMENT_MISTAKES, INCREMENT_QUESTION, RESET} from '~/actions/action-types';

export const isArtistAnswerCorrect = (userAnswer, question) => userAnswer[0].artist === question.song.artist;

export const isGenreAnswerCorrect = (userAnswer, question) => {
  return userAnswer.every((answer) => answer.genre === question.genre);
};

export const isAnswerCorrect = (userAnswer, question) => {
  let answerIsCorrect;
  switch (question.type) {
    case `artist`:
      answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
      break;
    case `genre`:
      answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
      break;
  }

  return answerIsCorrect;
};

export const isMistakesLimitReached = (mistakes, maxMistakes) => mistakes + 1 >= maxMistakes;

export const incrementQuestion = (question = null, step = -1) => {
  return (step === -1 || question) ? ({type: INCREMENT_QUESTION}) : ({type: RESET});
};

export const incrementMistakes = (userAnswer, question, mistakes, maxMistakes) => {
  const answerIsCorrect = isAnswerCorrect(userAnswer, question);

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
