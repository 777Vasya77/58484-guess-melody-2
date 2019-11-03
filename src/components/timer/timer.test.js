import React from 'react';
import renderer from 'react-test-renderer';
import Timer from '~/components/timer/timer';

describe(`Timer component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <Timer
              gameTime={3}
              onGameTimeEnded={jest.fn()}
              onGameTimeDecrement={jest.fn()}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
