import {colors} from 'theme/colors';

export interface button {
  buttonStyle?: object;
  onPress?: () => void;
  opacity?: number;
  disabled?: boolean;
  type?: string;
  text: any;
  textColor?: string;
  fontSize?: number;
  color?: colors;
  fontFamily?: string;
  isShadow?: boolean;
}

export interface buttonSize {
  large: {
    height: number;
    width: number;
    fontSize: number;
  };
  medium: {
    height: number;
    width: number;
    fontSize: number;
  };
  small: {
    height: number;
    width: number;
    fontSize: number;
  };
}
