import {button} from 'components/CTAButton/type';
import {colors} from 'theme/colors';

export interface modalProps {
  source: Array<number> | number;
  description: string;
  textSize?: number;
  visible: boolean;
  leftButton?: button;
  rightButton?: button;
  Colors?: colors | any;
}
