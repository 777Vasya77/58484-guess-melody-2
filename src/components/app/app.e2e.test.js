import React from 'react';
import {mount} from 'enzyme';
import App from '~/components/app/app';

it(`check the onClick callback`, () => {
  const clickHandler = jest.fn();
  const app = mount(
      <App
        gameTime={0}
        errorsCount={0}
        onClink={clickHandler}
      />
  );

  const startButton = app.find(`button`);
  startButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
