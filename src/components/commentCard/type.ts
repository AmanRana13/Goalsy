import { button } from 'components/CTAButton/type';
import { colors } from 'theme/colors';
export interface commentCardProps {
  item: item;
  color:colors;
}

type item = {
  source: number; userName: string; description?: string,
} 
