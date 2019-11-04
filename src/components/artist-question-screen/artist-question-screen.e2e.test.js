import React from 'react';
import {shallow} from 'enzyme';
import {questionTypeArtist as question} from '~/mocks/test-mocks';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';

describe(`ArtistQuestionScreen component e2e tests`, () => {
  const answer = question.answers[0];
  let wrapper;
  let callbackFunction;

  beforeEach(() => {
    callbackFunction = jest.fn();
    wrapper = shallow(
        <ArtistQuestionScreen
          question={question}
          screenIndex={0}
          onAnswer={callbackFunction}
          gameTime={3}
        />
    );

    const input = wrapper.find(`.game__artist`);
    input.simulate(`change`, {
      target: {value: JSON.stringify(answer)}
    });
  });

  it(`Check data in callback function`, () => {
    expect(callbackFunction).toHaveBeenCalledWith([answer]);
  });

  it(`Check call count function`, () => {
    expect(callbackFunction).toBeCalledTimes(1);
  });
});
