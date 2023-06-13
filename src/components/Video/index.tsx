import React, {useState, useRef, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import VideoPlayer, {
  OnSeekData,
  OnLoadData,
  OnProgressData,
} from 'react-native-video';
import appImages from 'theme/images';
import RNSlider from '../Slider';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import usePixel from 'hook/DevicePixel';
import FullScreenVideo from './fullScreenVideo';
import {videoProps} from './type';

const initialValue = {
  end: false,
  pause: true,
  currentTime: 0,
  duration: 1,
  isLoading: false,
  mute: false,
  volume: 1.0,
};

const VIDEO_STATE = {
  PLAY: 0,
  PAUSE: 1,
  END: 2,
};

let duration = 0;
const Video = (props: any) => {
  const {colors} = useTheme();
  const videoPlayer = useRef<VideoPlayer>();
  const [videoSates, setVideoStates] = useState<videoProps>(initialValue);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [playerState, setPlayerState] = useState(1);

  useEffect(() => {
    setVideoStates(initialValue);
    Platform.OS === 'android' && videoPlayer.current?.seek(0);
  }, [props.changeVideo]);

  useEffect(() => {
    if (!isFullScreen) {
      onReplay();
      setPlayerState(VIDEO_STATE.PLAY);
      setVideoStates(obj => ({...obj, duration: duration, pause: false}));
    }
  }, [isFullScreen]);

  const pause = () => {
    setVideoStates(obj => ({...obj, pause: true}));
  };
  const play = () => {
    setVideoStates(obj => ({...obj, pause: false}));
  };
  const onMuted = () => {
    setVideoStates(obj => ({
      ...obj,
      mute: !obj.mute,
      volume: !videoSates.mute ? 0 : 1,
    }));
  };

  const onReplay = () => {
    videoPlayer.current?.seek(0);
    setPlayerState(VIDEO_STATE.PLAY);
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
    duration = data.duration;
    setVideoStates(obj => ({
      ...obj,
      pause: true,
      isLoading: false,
      duration: data.duration,
      currentTime: 0,
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
      videoSates.pause ? play() : pause();
    }
  };

  const seekVideo = (value: OnSeekData) => {
    videoPlayer.current?.seek(+value.toFixed(2));
    setVideoStates(obj => ({...obj, currentTime: +value.toFixed(2)}));
    play();
  };

  console.log(videoSates);

  return (
    <View style={[styles.mediaPlayer, props.style]}>
      <VideoPlayer
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        paused={videoSates.pause}
        muted={videoSates.mute}
        ref={videoPlayer}
        resizeMode={'contain'}
        source={props.videoLink}
        style={[styles.mediaPlayer]}
        volume={videoSates?.volume}
        fullscreenOrientation={'landscape'}
        fullscreen={isFullScreen}
        onFullscreenPlayerDidDismiss={() => {
          setIsFullScreen(false);
          // pause()
          setVideoStates(obj => ({...obj, pause: true}));
          // setVideoStates(obj => ({
          //   ...obj,
          //   currentTime: 0,
          //   duration: duration,
          //   pause: true,
          // }));
        }}
        fullscreenAutorotate={false}
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
            onPress={() => onPlayPauseIconClick()}
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
                  : appImages.onlyPlay
              }
            />
          </TouchableOpacity>
          <RNSlider
            style={styles.progressSlider}
            onValueChange={seekVideo}
            onSlidingComplete={seekVideo}
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
          <TouchableOpacity
            activeOpacity={1}
            style={{marginStart: usePixel(10)}}
            onPress={() => {
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
      {Platform.OS === 'android' ? (
        <FullScreenVideo
          visible={isFullScreen}
          onClose={() => setIsFullScreen(false)}
          source={props.videoLink}
        />
      ) : null}
    </View>
  );
};

export default Video;
