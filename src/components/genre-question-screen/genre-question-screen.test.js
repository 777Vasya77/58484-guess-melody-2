import React from 'react';
import renderer from 'react-test-renderer';
import {questionTypeGenre as question} from '~/mocks/test-mocks';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';

it(`GenreQuestionScreen component render correctly`, () => {
  const tree = renderer.create(
      <GenreQuestionScreen
        question={question}
        screenIndex={0}
        onAnswer={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
