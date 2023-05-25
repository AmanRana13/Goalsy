import {StyleSheet} from 'react-native';
import {fonts} from 'theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  friendsViewStyle: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  scrollviewStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  fontLabel: {
    includeFontPadding: false,
    fontFamily: fonts.medium,
    fontWeight: '400',
    lineHeight: 17,
    textAlign: 'left',
    color: '#625F5F',
    fontSize: 14,
    textAlignVertical: 'center',
  },
  calendar: {
    backgroundColor: 'transparent',
  },
  customHeader: {
    backgroundColor: '#FCC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: -4,
    padding: 8,
  },

  textStyle: {
    flexWrap: 'wrap',
    includeFontPadding: false,
    fontFamily: fonts.bold,
    fontWeight: '600',
    color: '#625F5F',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default styles;
