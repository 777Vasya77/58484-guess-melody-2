import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userAnswer: []
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(evt) {
    const target = evt.target;
    const answers = this.state.userAnswer;

    if (target.checked) {
      answers.push(JSON.parse(target.value));
    } else {
      const index = answers.findIndex((answer) => answer.name === target.name);
      answers.splice(index, 1);
    }

    this.setState({userAnswer: answers});
  }

  _clearUserAnswer() {
    this.setState({userAnswer: []});
  }

  render() {
    const {question, screenIndex, onAnswer} = this.props;
    const {answers, genre} = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx={390} cy={390} r={370}
              style={{filter: `url(#blur)`, transform: `scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong" />
            <div className="wrong" />
            <div className="wrong" />
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(this.state.userAnswer);
            this._clearUserAnswer();
          }}>
            {answers.map((answer, i) => {
              return (
                <div key={`${screenIndex}-answer-${i}`} className="track">
                  <button className="track__button track__button--play" type="button" />
                  <div className="track__status">
                    <audio />
                  </div>
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name={`${screenIndex}-answer-${i}`}
                      value={JSON.stringify(answer)}
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
      </section>
    );
  }
}

GenreQuestionScreen.propTypes = {
  question: PropTypes.exact({
    type: PropTypes.oneOf([`genre`, `artist`]),
    genre: PropTypes.oneOf([`rock`, `pop`, `jazz`, `folk`]),
    answers: PropTypes.arrayOf(PropTypes.exact({
      src: PropTypes.string,
      genre: PropTypes.string,
    }))
  }).isRequired,
  screenIndex: PropTypes.number.isRequired,
  onAnswer: PropTypes.func,
};

export default GenreQuestionScreen;
