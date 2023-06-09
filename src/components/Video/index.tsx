import React, {useState, useRef} from 'react';
import {ActivityIndicator, Image, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import VideoPlayer from 'react-native-video';
import appImages from 'theme/images';
import RNSlider from '../Slider';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import usePixel from 'hook/DevicePixel';

const VIDEO_STATE = {
  PLAY: 0,
  PAUSE: 1,
  END: 2,
};

const Video = props => {
  const {colors} = useTheme();
  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(true);
  const [mute, setMute] = useState(false);
  const [playerState, setPlayerState] = useState(0);
  const [videoDetails, setVideoDetails] = useState(null);

  const onSeek = seek => {
    videoPlayer.current.seek(seek);
  };
  const onPaused = () => {
    setPaused(!paused);
    setPlayerState(paused ? VIDEO_STATE.PAUSE : VIDEO_STATE.PLAY);
  };

  const onMuted = () => {
    setMute(!mute);
  };

  const onReplay = () => {
    setPlayerState(0);
    videoPlayer.current.seek(0);
    onPaused();
    setCurrentTime(0);
  };

  const onProgress = data => {
    if (!isLoading && playerState !== VIDEO_STATE.END) {
      setCurrentTime(data.currentTime);
    } else if (playerState == VIDEO_STATE.END) {
      setCurrentTime(0);
    }
  };

  const onLoad = data => {
    setVideoDetails(data);
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => {
    setPlayerState(VIDEO_STATE.END);
  };

  const onPlayPauseIconClick = () => {
    if (playerState === VIDEO_STATE.END) {
      onReplay();
    } else {
      onPaused();
    }
  };

  const dragging = value => {
    setCurrentTime(value);
    if (playerState === VIDEO_STATE.PAUSE) {
      return;
    }
    onPaused();
  };

  const seekVideo = value => {
    onSeek(value);
    onPaused();
  };
  const customVideoHeight = videoDetails
    ? {
        aspectRatio:
          videoDetails.naturalSize.width / videoDetails.naturalSize.height,
      }
    : null;
  return (
    <View style={[styles.mediaPlayer, props.style]}>
      <VideoPlayer
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        onReadyForDisplay={() => setTimeout(() => setIsLoading(false), 500)}
        paused={paused}
        muted={mute}
        ref={videoPlayer}
        resizeMode={'contain'}
        source={props.videoLink}
        style={[styles.mediaPlayer, customVideoHeight]}
        volume={10}
        fullscreenOrientation={'landscape'}
        fullscreen={isFullScreen}
        onFullscreenPlayerDidDismiss={() => (
          setIsFullScreen(false), onPaused()
        )}
        fullscreenAutorotate={false}
        // poster={'https://camendesign.com/code/video_for_everybody/poster.jpg'}
        posterResizeMode={'cover'}
      />
      <BlurView
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: usePixel(50),
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        enabled={false}
        blurType="light"
        blurAmount={5}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={onPlayPauseIconClick}
            style={{
              alignItems: 'center',
              backgroundColor: colors.themeColor,
              borderRadius: usePixel(30),
              height: usePixel(25),
              justifyContent: 'center',
              width: usePixel(25),
            }}>
            <Image
              style={{
                width: usePixel(10),
                height: usePixel(10),
                marginStart: playerState === VIDEO_STATE.PLAY ? 2 : 0,
                tintColor: colors.commonBlack,
              }}
              resizeMode="contain"
              source={
                playerState === VIDEO_STATE.PAUSE
                  ? appImages.onlyPause
                  : playerState === VIDEO_STATE.END
                  ? appImages.onlyReplay
                  : appImages.onlyPlay
              }
            />
          </TouchableOpacity>
          <RNSlider
            style={styles.progressSlider}
            onValueChange={dragging}
            onSlidingComplete={seekVideo}
            minimumValue={0}
            maximumValue={Math.floor(duration)}
            value={Math.floor(currentTime)}
            trackStyle={styles.track}
            thumbStyle={[
              styles.thumb,
              {
                borderTopRightRadius: playerState === 2 ? 5 : 0,
                borderBottomRightRadius: playerState === 2 ? 5 : 0,
              },
            ]}
            addExtraWidth={Math.floor(currentTime) > 3 ? 2 : 0}
            leftPositon={{left: Math.floor(currentTime) > 3 ? -1 : 0}}
            minimumTrackTintColor={colors.themeColor}
          />
          <TouchableOpacity activeOpacity={1} onPress={onMuted}>
            <Image
              style={{
                width: usePixel(25),
                height: usePixel(25),
                marginBottom: 1,
                marginLeft: -2,
                tintColor: colors.themeColor,
              }}
              resizeMode="contain"
              source={mute ? appImages.mute : appImages.sound}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{marginStart: usePixel(10)}}
            onPress={() => {
              onReplay();
              setIsFullScreen(true);
            }}>
            <Image
              style={{
                width: usePixel(25),
                height: usePixel(25),
                tintColor: colors.themeColor,
              }}
              resizeMode="contain"
              source={appImages.fullScreen}
            />
          </TouchableOpacity>
        </View>
      </BlurView>
      {isLoading && (
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={colors.themeColor} />
        </View>
      )}
    </View>
  );
};

export default Video;
