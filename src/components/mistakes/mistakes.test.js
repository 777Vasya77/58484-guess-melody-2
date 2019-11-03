import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from '~/components/mistakes/mistakes';

describe(`Mistakes component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <Mistakes mistakes={3}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
