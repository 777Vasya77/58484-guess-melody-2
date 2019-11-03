import React from 'react';
import {shallow} from 'enzyme';
import Timer from '~/components/timer/timer';

describe(`Timer component e2e test`, () => {
  it(`Check call count function handleGameTimeDecrement`, () => {
    const handleGameTimeEnded = jest.fn();
    const handleGameTimeDecrement = jest.fn();
    const wrapper = shallow(
        <Timer
          gameTime={3}
          onGameTimeEnded={handleGameTimeEnded}
          onGameTimeDecrement={handleGameTimeDecrement}
        />
    );
    wrapper.instance()._tick();
    expect(handleGameTimeDecrement).toBeCalledTimes(1);
    expect(handleGameTimeEnded).toBeCalledTimes(0);
  });

  it(`Check call count function handleGameTimeDecrement`, () => {
    const handleGameTimeEnded = jest.fn();
    const handleGameTimeDecrement = jest.fn();
    const wrapper = shallow(
        <Timer
          gameTime={0}
          onGameTimeEnded={handleGameTimeEnded}
          onGameTimeDecrement={handleGameTimeDecrement}
        />
    );
    wrapper.instance()._tick();
    expect(handleGameTimeDecrement).toBeCalledTimes(0);
    expect(handleGameTimeEnded).toBeCalledTimes(1);
  });
});
