import {button} from 'components/CTAButton/type';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';

export interface modalProps {
  source: Array<number> | number;
  description: React.ReactNode;
  textSize?: number;
  visible: boolean;
  leftButton?: button & {style?: ViewStyle};
  rightButton?: button& {style?: ViewStyle};
  Colors?: colors;
}
