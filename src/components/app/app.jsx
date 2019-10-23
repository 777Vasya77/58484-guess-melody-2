import React, {PureComponent} from 'react';
import WelcomeScreen from '~/components/welcome-screen/welcome-screen';
import PropTypes from 'prop-types';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';

class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {
        gameTime,
        errorsCount
      } = props;

      return <WelcomeScreen
        gameTime={gameTime}
        errorsCount={errorsCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GenreQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {questions} = this.props;
    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          question: !isEnd ? nextIndex : -1
        };
      });
    });
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
};

export default App;
