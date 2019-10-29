import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from '~/components/audio-player/audio-player';
import {audioSrc} from '~/mocks/test-mocks';

describe(`AudioPlayer component tests`, () => {

  it(`Component render correctly`, () => {
    const handlePlayButtonClick = jest.fn();
    const tree = renderer.create(
        <AudioPlayer
          isPlaying={false}
          src={audioSrc}
          onPlayButtonClick={handlePlayButtonClick}
        />,
        {createNodeMock: () => ({})}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
