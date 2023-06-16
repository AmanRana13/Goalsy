import React, {memo} from 'react';
import {View} from 'react-native';

import {TextBox, Spacer} from 'components';

import {fonts} from 'theme/fonts';

import usePixel from 'hook/DevicePixel';

import style from './styles';

import {headerProps} from './type';

const Header = memo(
  ({LeftIcon, RightIcon, RightIcon2, centerItem, title}: headerProps) => {
    const height = usePixel(50);
    return (
      <View style={[style.container, {height: height}]}>
        <View style={style.innerContainer}>
          {/* LeftIcon */}
          {LeftIcon ? (
            <View
              style={[style.LeftIcons, RightIcon && RightIcon2 && {width: 85}]}>
              {LeftIcon}
            </View>
          ) : (
            <Spacer
              styles={
                RightIcon && RightIcon2 && !LeftIcon
                  ? style.notLeftIcon
                  : style.notLeft
              }
            />
          )}
          {/* center content*/}
          <View style={style.center}>
            {centerItem ? (
              centerItem
            ) : (
              <TextBox
                text={title}
                size={23}
                styles={{fontFamily: fonts.medium}}
                textProps={{numberOfLines: 1}}
              />
            )}
          </View>
          {/* RightIcons */}

          <View style={style.rightIcons}>
            {RightIcon && <View style={[style.icons1]}>{RightIcon}</View>}
            {RightIcon2 && <View style={[style.icons2]}>{RightIcon2}</View>}
            {!RightIcon && !RightIcon2 && (
              <Spacer styles={style.notRightIcon} />
            )}
          </View>
        </View>
      </View>
    );
  },
);

export default Header;
