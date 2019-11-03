import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '~/components/app/app';
import {questions} from '~/mocks/test-mocks';

it(`App component render correctly`, () => {
  const tree = renderer
    .create(
        <App
          questions={questions}
          errorsCount={0}
          gameTime={0}
          mistakes={0}
          onUserAnswer={jest.fn()}
          onWelcomeScreenClick={jest.fn()}
          step={0}
          onGameTimeDecrement={jest.fn()}
          onGameTimeEnded={jest.fn()}
        />,
        {createNodeMock: () => ({})}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
