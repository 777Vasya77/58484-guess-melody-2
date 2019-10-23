import React from 'react';
import {shallow} from 'enzyme';
import WelcomeScreen from '~/components/welcome-screen/welcome-screen';

it(`check the onClick callback`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <WelcomeScreen
        gameTime={0}
        errorsCount={0}
        onClink={clickHandler}
      />
  );

  const startButton = app.find(`button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
