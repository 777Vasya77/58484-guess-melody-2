import React from 'react';
import {shallow} from 'enzyme';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  },
  answers: [
    {
      picture: `http://placehold.it/134x134`,
      artist: `John Snow`,
    },
    {
      picture: `http://placehold.it/134x134`,
      artist: `Jack Daniels`,
    },
    {
      picture: `http://placehold.it/134x134`,
      artist: `Jim Beam`,
    },
  ],
};

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
