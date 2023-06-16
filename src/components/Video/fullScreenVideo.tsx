import React, {useState, useRef, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  Platform,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import VideoPlayer, {
  OnSeekData,
  OnLoadData,
  OnProgressData,
} from 'react-native-video';
import appImages from 'theme/images';
import RNSlider from '../Slider';
import {useTheme} from '@react-navigation/native';
import usePixel, {Height, Width} from 'hook/DevicePixel';
import {Icons, StatusHeader} from 'components';

import Orientation from 'react-native-orientation-locker';

import {fullScreenProps, videoProps} from './type';
import {getStatusBarHeight} from 'utils/getStatusBarHeight';
const initialValue = {
  play: false,
  end: false,
  pause: true,
  currentTime: 0,
  duration: 0,
  isLoading: true,
  mute: false,
  volume: 1.0,
};

const VIDEO_STATE = {
  PLAY: 0,
  PAUSE: 1,
  END: 2,
};

const FullScreenVideo = ({
  visible,
  onClose,
  source,
  isMute,
  muteCallback,
}: fullScreenProps) => {
  const {colors} = useTheme();
  const videoPlayer = useRef<VideoPlayer>();
  const [videoSates, setVideoStates] = useState<videoProps>(initialValue);
  const [playerState, setPlayerState] = useState(0);
  const [videoDetails, setVideoDetails] = useState(null);
  useEffect(() => {
    visible && Orientation.lockToLandscapeLeft();
    setVideoStates(obj => ({...obj, mute: !!isMute, volume: isMute ? 0 : 1}));
    return () => visible && Orientation.lockToPortrait();
  }, [visible]);

  const onSeek = (seek: OnSeekData) => {
    videoPlayer.current?.seek(seek);
  };
  const onPaused = () => {
    setVideoStates(obj => ({...obj, pause: !obj.pause}));
    setPlayerState(videoSates.pause ? VIDEO_STATE.PAUSE : VIDEO_STATE.PLAY);
  };

  const onMuted = () => {
    setVideoStates(obj => ({
      ...obj,
      mute: !obj.mute,
      volume: !obj.mute ? 0 : 1,
    }));
    muteCallback(!videoSates.mute);
  };

  const onReplay = () => {
    videoPlayer.current?.seek(0);
    setPlayerState(VIDEO_STATE.PAUSE);
    setVideoStates(obj => ({...obj, currentTime: 0, pause: false, end: false}));
  };

  const onProgress = (data: OnProgressData) => {
    if (!videoSates?.isLoading && playerState !== VIDEO_STATE.END) {
      setVideoStates(obj => ({...obj, currentTime: data.currentTime}));
    } else if (playerState == VIDEO_STATE.END) {
      setVideoStates(obj => ({...obj, currentTime: 0}));
    }
  };

  const onLoad = (data: OnLoadData) => {
    setVideoDetails(data);
    setPlayerState(VIDEO_STATE.PLAY);
    setVideoStates(obj => ({
      ...obj,
      play: true,
      pause: true,
      isLoading: false,
      duration: data.duration,
    }));
  };

  const onLoadStart = () =>
    setVideoStates(obj => ({
      ...obj,
      isLoading: true,
    }));

  const onEnd = () => {
    setPlayerState(VIDEO_STATE.END);
    setVideoStates(obj => ({...obj, end: true, pause: true}));
  };

  const onPlayPauseIconClick = () => {
    if (playerState === VIDEO_STATE.END) {
      onReplay();
    } else {
      onPaused();
    }
  };

  const dragging = (value: number) => {
    setVideoStates(obj => ({...obj, currentTime: value}));
    if (playerState === VIDEO_STATE.PAUSE) {
      return;
    }
    onPaused();
  };

  const seekVideo = (value: number) => {
    onSeek(value);
    onPaused();
  };

  return (
    <Modal
      visible={visible}
      style={{flex: 1}}
      onRequestClose={onClose}
      transparent={true}
      statusBarTranslucent={true}>
      {/* <StatusHeader backgroundColor={"#000000"}/> */}
      <View style={[styles.mediaPlayer]}>
        <VideoPlayer
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={videoSates.pause}
          muted={videoSates.mute}
          ref={videoPlayer}
          resizeMode={'contain'}
          source={source}
          style={[styles.mediaPlayer]}
          volume={videoSates?.volume}
        />
        <BlurView
          style={[
            {
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: usePixel(50),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
            Platform.OS === 'android' && {backgroundColor: '#000000b0'},
          ]}
          blurType="light"
          blurAmount={5}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              paddingTop: 3,
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
                  marginStart: videoSates.pause ? 2 : 0,
                  tintColor: colors.commonBlack,
                }}
                resizeMode="contain"
                source={
                  !videoSates.pause && !videoSates.end
                    ? appImages.onlyPause
                    : videoSates.end
                    ? appImages.onlyReplay
                    : videoSates.pause
                    ? appImages.onlyPlay
                    : null
                }
              />
            </TouchableOpacity>
            <RNSlider
              disabled={videoSates.end}
              style={styles.progressSlider}
              onValueChange={seekVideo}
              // onSlidingComplete={seekVideo}
              minimumValue={0}
              maximumValue={Math.floor(videoSates?.duration)}
              value={Math.floor(videoSates?.currentTime)}
              trackStyle={styles.track}
              thumbStyle={[
                styles.thumb,
                {
                  borderTopRightRadius: playerState === 2 ? 5 : 0,
                  borderBottomRightRadius: playerState === 2 ? 5 : 0,
                },
              ]}
              addExtraWidth={Math.floor(videoSates?.currentTime) > 3 ? 2 : 0}
              leftPositon={{
                left: Math.floor(videoSates?.currentTime) > 3 ? -1 : 0,
              }}
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
                source={videoSates?.mute ? appImages.mute : appImages.sound}
              />
            </TouchableOpacity>
          </View>
        </BlurView>
        <Icons
          source={appImages.backArrowDark}
          styles={{
            zIndex: 999999999,
            position: 'absolute',
            top: getStatusBarHeight(false) - 20,
          }}
          onPress={onClose}
        />
        {videoSates?.isLoading && (
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
    </Modal>
  );
};

export default FullScreenVideo;

const styles = StyleSheet.create({
  mediaPlayer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  progressSlider: {
    alignSelf: 'center',
    width: '60%',
    marginHorizontal: 10,
  },
  thumb: {
    backgroundColor: 'transparent',
    height: 10,
  },
  track: {
    borderRadius: 5,
    height: 10,
    backgroundColor: '#3C3C3C',
  },
});
