import {colors} from 'theme/colors';

export interface simpleCardProps {
  item: {
    header: string;
    description: string;
    time: string;
  };
  source?: any
  color: colors;
  isRed?:boolean;
  disabled?:boolean
  onPress?: () => {} | void;
}
