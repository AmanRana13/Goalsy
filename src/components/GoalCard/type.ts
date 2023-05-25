import {colors} from 'theme/colors';

export interface GoalCardProps {
  item: {
    header: string;
    description: string;
    time: string;
  };
  source?: any;
  color: colors;
  isRed?: boolean;
  disabled?: boolean;
  onPress?: () => {} | void;
  showButton?: boolean;
  showSlider?: boolean;
  showIcon?: boolean;
  ShowActivity?: boolean,
  ShowGoal?:boolean,
  ShowReminder?: boolean,
  ShowShare?: boolean,
}
