export interface props {
  source: Array<number> | number;
  styles?: object;
  imageStyle?: object;
  size?: number | any;
  resize?: any;
  disabled?: boolean;
  onPress?: () => void | {};
  activeOpacity?:number
}
