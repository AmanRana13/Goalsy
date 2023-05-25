import { button } from 'components/CTAButton/type';
import { colors } from 'theme/colors';
export interface friendCardProps {
  item: item; button1?: button; button2?: button,
  color:colors
}

type item = {
  source: number; userName: string; description?: string,
} 
