import React, { useState, useRef } from 'react';
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import VideoPlayer from 'react-native-video';
import appImages from 'theme/images';
import RNSlider from "../Slider";
import styles from './styles';
import { responsiveWidth } from 'utils/responsiveSize';
import { useTheme } from '@react-navigation/native';

const PLAYER_STATES = {
  PLAYING: 0,
  PAUSED: 1,
  ENDED: 2,
}

const Video = (props) => {
  const {colors} = useTheme()
  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(true);
  const [mute, setMute] = useState(false);
  const [playerState, setPlayerState] = useState(1);
  const [videoDetails, setVideoDetails] = useState(null);

  const onSeek = (seek) => {
    videoPlayer.current.seek(seek);
  };
  const onPaused = () => {
    setPaused(!paused);
    setPlayerState(paused ? 0 : 1);
  };

  const onMuted = () => {
    setMute(!mute);
  };

  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
    setPlayerState(0);
  };

  const onProgress = (data) => {
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setVideoDetails(data)
    setDuration(data.duration);
  };

  const onLoadStart = () => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const onPlayPauseIconClick = () => {
    if (playerState === 2) {
      onReplay()
    }
    else {
      onPaused()
    }
  }

  const dragging = (value) => {
    setCurrentTime(value)
    if (playerState === 1) {
      return;
    }
    onPaused();
  };

  const seekVideo = (value) => {
    onSeek(value)
    onPaused();
  };
  const customVideoHeight = videoDetails ? { aspectRatio: (videoDetails.naturalSize.width / videoDetails.naturalSize.height) } : null
  return (
    <View style={[{
      backgroundColor: 'black',
      alignSelf: 'center',
      width: responsiveWidth(92),
      overflow: 'hidden',
      borderRadius: responsiveWidth(5),
    }, props.style]}>
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
        source={{ uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
        style={[styles.mediaPlayer, customVideoHeight]}
        volume={10}
        fullscreenOrientation={'landscape'}
        fullscreen={isFullScreen}
        onFullscreenPlayerDidDismiss={() => setIsFullScreen(false)}
        fullscreenAutorotate={false}
        poster={"https://camendesign.com/code/video_for_everybody/poster.jpg"}
        posterResizeMode={'cover'}
      />

      <BlurView
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingVertical: responsiveWidth(2),
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        blurType="light"
        blurAmount={2}
      >
        <TouchableOpacity onPress={onPlayPauseIconClick}
          style={{
            alignItems: "center",
            backgroundColor: colors.themeColor,
            borderRadius: responsiveWidth(3.5),
            height: responsiveWidth(7),
            justifyContent: "center",
            width: responsiveWidth(7),
          }}
        >
          <Image style={{
            width: responsiveWidth(3), height: responsiveWidth(3),
            marginStart: playerState === 0 ? 0 : 2,
            tintColor: colors.commonBlack
          }}
            resizeMode="contain"
            source={
              playerState === 0 ? appImages.onlyPause :
                (
                  playerState === 2 ? appImages.onlyReplay
                    :
                    appImages.onlyPlay
                )
            } />
        </TouchableOpacity>
        <RNSlider
          style={styles.progressSlider}
          onValueChange={dragging}
          onSlidingComplete={seekVideo}
          minimumValue={0}
          maximumValue={Math.floor(duration)}
          value={Math.floor(currentTime)}
          trackStyle={styles.track}
          thumbStyle={[styles.thumb, {
            borderTopRightRadius: playerState === 2 ? 5 : 0,
            borderBottomRightRadius: playerState === 2 ? 5 : 0,
          }]}
          addExtraWidth={Math.floor(currentTime) > 3 ? 2 : 0}
          leftPositon={{ left: Math.floor(currentTime) > 3 ? -1 : 0 }}
          minimumTrackTintColor={colors.themeColor}
        />
        <TouchableOpacity activeOpacity={1} onPress={onMuted}>
          <Image style={{ width: responsiveWidth(6), height: responsiveWidth(6), marginBottom: 1, marginLeft: -2, tintColor: colors.themeColor }} resizeMode="contain" source={mute ? appImages.mute : appImages.sound} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={{ marginStart: responsiveWidth(2) }} onPress={() => {
          onReplay()
          setIsFullScreen(true)
        }}>
          <Image style={{ width: responsiveWidth(5), height: responsiveWidth(5),tintColor: colors.themeColor }} resizeMode="contain" source={appImages.fullScreen} />
        </TouchableOpacity>
      </BlurView>
      {isLoading && <View style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>
      }
    </View>
  );
};

export default Video;