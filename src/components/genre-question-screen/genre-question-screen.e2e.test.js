import React from 'react';
import {shallow} from 'enzyme';
import {questionTypeGenre as question} from '~/mocks/test-mocks';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';

const changeCheckboxStatus = (wrapper, status = true) => {
  const input = wrapper.find(`.game__input`).first();
  const name = input.prop(`name`);
  input.simulate(`change`, {
    target: {
      name,
      checked: status
    }
  });

  return name;
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

    changeCheckboxStatus(wrapper);

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

  it(`Answer correctly changed status on true in state`, () => {
    const name = changeCheckboxStatus(wrapper);
    expect(wrapper.state(`userAnswers`)[name]).toBeTruthy();
  });

  it(`Answer correctly changed status on false in state`, () => {
    const name = changeCheckboxStatus(wrapper, false);
    expect(wrapper.state(name)).toBeFalsy();
  });

  it(`Reset state working correctly`, () => {
    expect(wrapper.state()).toEqual(GenreQuestionScreen._getInitialState(question.answers));
  });
});
