import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import WelcomeScreen from '~/components/welcome-screen/welcome-screen';
import {decrementTimer, incrementMistakes, incrementQuestion, resetGame} from '~/actions/action-creator';
import QuestionScreen from '~/components/question-screen/question-screen';

class App extends PureComponent {
  static _getScreen(step, props, onUserAnswer) {
    if (step === -1) {
      const {gameTime, errorsCount, onWelcomeScreenClick} = props;

      return <WelcomeScreen
        gameTime={gameTime}
        errorsCount={errorsCount}
        onStartButtonClick={onWelcomeScreenClick}
      />;
    }

    const {questions, mistakes, gameTime, onGameTimeDecrement, onGameTimeEnded} = props;
    const currentQuestion = questions[step];

    return <QuestionScreen
      currentQuestion={currentQuestion}
      mistakes={mistakes}
      gameTime={gameTime}
      step={step}
      onUserAnswer={onUserAnswer}
      onGameTimeDecrement={onGameTimeDecrement}
      onGameTimeEnded={onGameTimeEnded}
    />;
  }

  render() {
    const {onUserAnswer, step, questions, mistakes, errorsCount} = this.props;
    const question = questions[step];

    return App._getScreen(step, this.props, (userAnswer) => {
      onUserAnswer(userAnswer, question, mistakes, errorsCount);
    });
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onGameTimeDecrement: PropTypes.func.isRequired,
  onGameTimeEnded: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
  gameTime: state.gameTime
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(incrementQuestion()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(incrementQuestion());
    dispatch(incrementMistakes(userAnswer, question, mistakes, maxMistakes));
  },

  onGameTimeDecrement: () => {
    dispatch(decrementTimer());
  },

  onGameTimeEnded: () => {
    dispatch(resetGame());
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
