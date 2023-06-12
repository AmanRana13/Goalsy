import {Dimensions} from 'react-native';

export const Height = Dimensions.get('window').height;
export const Width = Dimensions.get('window').width;
const usePixel = value => {
    const {height, width} = Dimensions.get('window');
    const standardLength = height > width ? width : height;
    const result = Math.round(standardLength * (value / 400));
    
  return result;
};

export default usePixel;
