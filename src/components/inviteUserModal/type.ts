import {colors} from 'theme/colors';

export interface userInviteModal {
  visible: boolean;
  onClose: ()=>void;
  colors?: colors | any;
  onUpdatePress: () => void;
  item: object;
}
