import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from '~/components/welcome-screen/welcome-screen';

it(`render correctly`, () => {
  const tree = renderer
    .create(
        <WelcomeScreen
          gameTime={0}
          errorsCount={0}
          onStartButtonClick={() => {}} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
