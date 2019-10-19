import React from 'react';
import renderer from 'react-test-renderer';
import App from '~/components/app/app';

it(`render correctly`, () => {
  const tree = renderer
    .create(
        <App
          errorsCount={0}
          gameTime={0}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
