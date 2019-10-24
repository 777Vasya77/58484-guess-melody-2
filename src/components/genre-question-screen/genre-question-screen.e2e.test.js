import React from 'react';
import {shallow} from 'enzyme';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `rock`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `pop`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `jazz`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `rock`,
    },
  ],
};

const changeCheckboxStatus = (wrapper, answer, status = true) => {
  const input = wrapper.find(`.game__input`).first();
  input.simulate(`change`, {
    target: {
      value: JSON.stringify(answer),
      checked: status
    }
  });
};

describe(`GenreQuestionScreen component e2e tests`, () => {
  const answer = question.answers[0];
  let wrapper;
  let callbackFunction;

  beforeEach(() => {
    callbackFunction = jest.fn();
    wrapper = shallow(
        <GenreQuestionScreen
          question={question}
          screenIndex={0}
          onAnswer={callbackFunction}
        />
    );

    changeCheckboxStatus(wrapper, answer);

    const form = wrapper.find(`.game__tracks`);
    form.simulate(`submit`, {
      preventDefault: () => {}
    });
  });

  it(`Check data in callback function`, () => {
    expect(callbackFunction).toHaveBeenCalledWith([answer]);
  });

  it(`Check call count function`, () => {
    expect(callbackFunction).toBeCalledTimes(1);
  });

  it(`Answer correctly added in state`, () => {
    changeCheckboxStatus(wrapper, answer);
    changeCheckboxStatus(wrapper, answer);
    expect(wrapper.state().userAnswer).toHaveLength(2);
  });

  it(`Answer correctly removed from state`, () => {
    changeCheckboxStatus(wrapper, answer);
    changeCheckboxStatus(wrapper, answer);
    changeCheckboxStatus(wrapper, answer, false);
    expect(wrapper.state().userAnswer).toHaveLength(1);
  });

});
