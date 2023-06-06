import {colors} from 'theme/colors';

export interface button {
  buttonStyle?: object;
  onPress?: () => void;
  opacity?: number;
  disabled?: boolean;
  type?: React.ReactNode;
  text: any;
  textColor?: string;
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  isShadow?: boolean;
  hideShadow?: boolean;
}
type buttonSizTypeProps = {
  height: number;
  width: number;
  fontSize: number;
  radius: number;
  distance: number;
  fontFamily: string;
};
export interface buttonSizeProps {
  large: buttonSizTypeProps;
  medium: buttonSizTypeProps;
  small: buttonSizTypeProps;
}
