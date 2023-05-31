import {colors} from 'theme/colors';

export interface dropdown {
  list: Array<object>;
  onPress: () => void;
  colorCode: colors;
  label?: string;
}
export type item = {
  colorCode: string;
  color: string | undefined;
  id: number | string;
  value: string;
};
export interface list {
  setItem: any;
  setShowList: any;
  color: colors;
  index: number;
  lastIndex: number;
}
