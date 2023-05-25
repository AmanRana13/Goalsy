import { colors } from "theme/colors";

export interface InputFieldProps {
  label?: string;
  TextInputProps: TextInputType;
  LeftCompo?: React.ReactElement;
  RightCompo?: React.ReactElement;
  LabelCompo?: React.ReactElement;
  LeftIconSource?:any,
  colors:colors
}
export interface TextInputType {
  placeholder: string;
  maxLength?: number;
  returnKeyType?: string;
  keyboardType?: string;
  autoCapitalize?: string;
  inputStyle?: object;
  labelStyle?: object;
  nextField?:string,
  required?:boolean
  onChangeText?: () => void;
}
