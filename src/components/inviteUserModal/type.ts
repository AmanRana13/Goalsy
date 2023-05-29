import {colors} from 'theme/colors';

export interface userInviteModal {
  visible: boolean;
  colors?: colors | any;
  onUpdatePress: () => void;
  item: object;
}
