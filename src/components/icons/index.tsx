import {Image, TouchableOpacity} from 'react-native';
import React, {memo, useCallback} from 'react';
import {useTheme} from '@react-navigation/native';

import usePixel from 'hook/DevicePixel';

import {props} from './type';
import appImages from 'theme/images';

const Icons = ({
  source = appImages.dummyUser,
  styles,
  size = 40,
  resize = 'contain',
  disabled = false,
  imageStyle,
  onPress,
  activeOpacity = 0.6,
}: props) => {
  const sizes = usePixel(size);
  const {dark}: any = useTheme();
  const renderView = useCallback(() => {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={disabled ? 1 : activeOpacity}
        style={[{width: sizes, height: sizes}, styles]}>
        <Image
          style={{width: '100%', height: '100%', ...imageStyle}}
          source={
            // NOTE* put light theme image at 0 and dark at 1 index
            Array.isArray(source) ? (dark ? source[1] : source[0]) : source
          }
          resizeMode={resize}
        />
      </TouchableOpacity>
    );
  }, [source, sizes, styles, dark]);

  return renderView();
};

export default memo(Icons);
