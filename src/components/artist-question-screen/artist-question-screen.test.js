import React from 'react';
import renderer from 'react-test-renderer';
import {questionTypeArtist as question} from '~/mocks/test-mocks';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';

it(`ArtistQuestionScreen component render correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={question}
        screenIndex={0}
        onAnswer={() => {}}
        mistakes={3}
        gameTime={3}
      />,
      {createNodeMock: () => ({})}
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
