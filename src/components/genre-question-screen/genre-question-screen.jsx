import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '~/components/audio-player/audio-player';

class GenreQuestionScreen extends PureComponent {
  static _getInitialState(answers) {
    const initialState = {
      activePlayer: -1,
      userAnswers: {}
    };

    answers.forEach((answer, i) => {
      Object.assign(initialState.userAnswers, {[`answer-${i}`]: false});
    });

    return initialState;
  }

  constructor(props) {
    super(props);

    this.state = GenreQuestionScreen._getInitialState(props.question.answers);

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
  }

  _handleChange({target: {name, checked}}) {
    const userAnswers = Object.assign({}, this.state.userAnswers);
    userAnswers[name] = checked;

    this.setState({userAnswers});
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {onAnswer} = this.props;

    onAnswer(this._getCheckedAnswer());
    this._resetState();
  }

  _handlePlayButtonClick(i) {
    this.setState({
      activePlayer: this.state.activePlayer === i ? -1 : i
    });
  }

  _getCheckedAnswer() {
    const {userAnswers} = this.state;
    const {answers} = this.props.question;
    const checkedAnswers = [];

    for (let [key, value] of Object.entries(userAnswers)) {
      if (value) {
        const index = key.split(``).reverse()[0];
        checkedAnswers.push(answers[index]);
      }
    }

    return checkedAnswers;
  }

  _resetState() {
    const {answers} = this.props.question;
    this.setState(GenreQuestionScreen._getInitialState(answers));
  }

  render() {
    const {question, screenIndex} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={this._handleSubmit}>
          {answers.map((answer, i) => {
            return (
              <div key={`${screenIndex}-answer-${i}`} className="track">
                <AudioPlayer
                  src={answer.src}
                  isPlaying={i === this.state.activePlayer}
                  onPlayButtonClick={() => this._handlePlayButtonClick(i)}
                />
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name={`answer-${i}`}
                    value={`answer-${i}`}
                    checked={this.state.userAnswers[`answer-${i}`]}
                    id={`answer-${i}`}
                    onChange={this._handleChange}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            );
          })}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.exact({
    type: PropTypes.oneOf([`genre`, `artist`]),
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.exact({
      src: PropTypes.string,
      genre: PropTypes.string,
    }))
  }).isRequired,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func,
};

export default GenreQuestionScreen;
