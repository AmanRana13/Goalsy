import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  LeftIcons: {
    height: 35,
    aspectRatio: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  icons1: {
    height: 35,
    aspectRatio: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  center: {
    flex: 7,
    alignItems: 'center',
    justifyContent:"center",
    // backgroundColor:"red"
  },
  rightIcons: {flexDirection: 'row', gap: 20},
  icons2: {
    height: 35,
    aspectRatio: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  notRightIcon: {
    height: 35,
    width:35,
  },
  notLeftIcon: {
    height: 35,
    width:85,
  },
  notLeft :{
    height: 35,
    width:40,
  }
});

export default style;
