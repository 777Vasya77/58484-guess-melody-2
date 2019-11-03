import React from 'react';
import renderer from 'react-test-renderer';
import QuestionScreen from '~/components/question-screen/question-screen';
import {questionTypeArtist, questionTypeGenre} from '~/mocks/test-mocks';

const renderTree = (question) => (
  <QuestionScreen
    mistakes={0}
    gameTime={7}
    step={1}
    onUserAnswer={jest.fn()}
    onGameTimeDecrement={jest.fn()}
    onGameTimeEnded={jest.fn()}
    currentQuestion={question}
  />
);

describe(`QuestionScreen component tests`, () => {
  it(`Component render correctly artist type question`, () => {
    const tree = renderer
      .create(
          renderTree(questionTypeArtist),
          {createNodeMock: () => ({})}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Component render correctly genre type question`, () => {
    const tree = renderer
      .create(
          renderTree(questionTypeGenre),
          {createNodeMock: () => ({})}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
