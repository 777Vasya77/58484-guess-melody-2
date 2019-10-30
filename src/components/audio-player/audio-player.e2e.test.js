import React from 'react';
import {mount} from 'enzyme';
import AudioPlayer from '~/components/audio-player/audio-player';
import {audioSrc} from '~/mocks/test-mocks';

[`pause`, `play`].forEach((item) => jest.spyOn(window.HTMLMediaElement.prototype, item).mockImplementation(() => {}));

describe(`AudioPlayer components e2e test`, () => {
  const createWrapper = (isPlaying) => {
    const handlePlayButtonClick = jest.fn();
    return mount(
        <AudioPlayer
          isPlaying={isPlaying}
          src={audioSrc}
          onPlayButtonClick={handlePlayButtonClick}
        />
    );
  };
  const click = (wrapper) => {
    wrapper.setState({isLoading: false});

    const button = wrapper.find(`button`);
    button.simulate(`click`);
  };

  it(`On click play button component state isPlaying change to TRUE`, () => {
    const wrapper = createWrapper(false);
    click(wrapper);

    expect(wrapper.state().isPlaying).toBeTruthy();
  });

  it(`On click play button component state isPlaying change to FALSE`, () => {
    const wrapper = createWrapper(true);
    click(wrapper);

    expect(wrapper.state().isPlaying).toBeFalsy();
  });
});
