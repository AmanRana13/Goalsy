import {button} from 'components/CTAButton/type';
import React from 'react';
import {colors} from 'theme/colors';

export interface modalProps {
  source: Array<number> | number;
  description: React.ReactNode;
  textSize?: number;
  visible: boolean;
  leftButton?: button;
  rightButton?: button;
  Colors?: colors | any;
}
