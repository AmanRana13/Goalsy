import usePixel from 'hook/DevicePixel';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mediaPlayer: {
    // width: '100%',
    aspectRatio: 16/9,
    backgroundColor: 'black',
    overflow: 'hidden',
    borderRadius: usePixel(15)
  },
  progressSlider: {
    alignSelf: "center",
    width: usePixel(230),
    marginHorizontal: 10,
  },
  thumb: {
    backgroundColor: 'transparent',
    height: 10,
  },
  track: {
    borderRadius: 5,
    height: 10,
    backgroundColor: '#3C3C3C'
  },
});

export default styles;