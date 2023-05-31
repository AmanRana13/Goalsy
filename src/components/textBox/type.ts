import { TextProps } from "react-native";

export interface props {
  text: React.ReactNode;
  color?: string;
  size?: number;
  styles?: Object;
  fontFamily?: string;
  onPress?: () => {};
  textProps?:any;
}
