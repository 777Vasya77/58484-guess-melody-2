import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';
import GameHeader from '~/components/game-header/game-header';

class QuestionScreen extends PureComponent {
  static getScreen(props) {

    const {currentQuestion, mistakes, gameTime, step, onUserAnswer} = props;

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        screenIndex={step}
        mistakes={mistakes}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        screenIndex={step}
        mistakes={mistakes}
        question={currentQuestion}
        onAnswer={onUserAnswer}
        gameTime={gameTime}
      />;
    }

    return null;
  }

  render() {
    const {mistakes, gameTime, currentQuestion, onGameTimeDecrement, onGameTimeEnded} = this.props;
    return (
      <section className={`game game--${currentQuestion.type}`}>
        <GameHeader
          mistakes={mistakes}
          gameTime={gameTime}
          onGameTimeDecrement={onGameTimeDecrement}
          onGameTimeEnded={onGameTimeEnded}/>
        {QuestionScreen.getScreen(this.props)}
      </section>
    );
  }
}

QuestionScreen.propTypes = {
  mistakes: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onGameTimeDecrement: PropTypes.func.isRequired,
  onGameTimeEnded: PropTypes.func.isRequired,
  currentQuestion: PropTypes.object.isRequired,
};

export default QuestionScreen;

