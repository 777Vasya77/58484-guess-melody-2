import React from 'react';
import renderer from 'react-test-renderer';
import GameHeader from '~/components/game-header/game-header';

describe(`GameHeader component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <GameHeader
              mistakes={3}
              gameTime={3}
              onGameTimeDecrement={jest.fn()}
              onGameTimeEnded={jest.fn()}
            />
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
