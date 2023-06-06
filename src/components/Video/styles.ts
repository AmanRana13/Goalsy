import { Width } from 'hook/DevicePixel';
import { StyleSheet } from 'react-native';
import { responsiveWidth } from 'utils/responsiveSize';

const styles = StyleSheet.create({
  mediaPlayer: {
    width: '100%',
    // alignSelf: 'center',
    aspectRatio: 16/9,
    backgroundColor: 'black',
    // justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: responsiveWidth(5)
  },
  progressSlider: {
    alignSelf: "center",
    width: '68%',
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