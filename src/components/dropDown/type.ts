
import {colors} from 'theme/colors';

export interface dropdown {
  list: Array<object>;
  onPress: (item:Object) => void;
  color: colors;
  label?: React.ReactNode;
  defaultValue?: string;
}
export interface list {
  item: {id: number|string; value: string};
  setItem: any;
  setShowList: any;
  color: colors;
  index:number
  lastIndex:number
}
