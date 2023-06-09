import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'components/icons';
import usePixel from 'hook/DevicePixel';
import {colors} from 'theme/colors';
import appImages from 'theme/images';

type props = {
  value?: (e: boolean) => {} | void;
  size?: number;
  styles?: object;
  border?: boolean;
  color: colors;
  borderColor?: string;
  circle?: boolean;
  setIndex?: number;
  id?: number;
  showCheck?: boolean;
  setDisable?: boolean;
};

const CheckBox = ({
  styles,
  value,
  color,
  size = 23,
  circle = false,
  borderColor,
  showCheck = true,
  setIndex,
  id,
  setDisable,
}: props) => {
  const [state, setState] = useState<boolean>(showCheck);
  const sizes = usePixel(size);
  const design = style(color);
  const RenderItem = useCallback(() => {
    return (
      <TouchableOpacity
        style={[
          design.container,
          {
            height: sizes,
            width: sizes,
            borderRadius: circle ? 30 : 7,
            backgroundColor: state ? color?.themeColor : 'transparent',
            borderColor: color?.themeColor,
          },
          styles,
        ]}
        onPress={() => {
          setIndex && setIndex(id);
          setState(!state);
          setDisable && setDisable(state);
          value && value(!state);
        }}>
        {state && showCheck ? (
          <Icons
            source={appImages.checkImage}
            size={size / 1.8}
            disabled={true}
          />
        ) : (
          ''
        )}
      </TouchableOpacity>
    );
  }, [state]);

  return <RenderItem />;
};

export default memo(CheckBox);

const style = color =>
  StyleSheet.create({
    container: {
      borderWidth: 2,
      borderRadius: 10,
      borderColor: color?.black,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
