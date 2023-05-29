import { button } from 'components/CTAButton/type';
import { colors } from 'theme/colors';
export interface commentCardProps {
  item: item;
  color:colors;
  setOpenModal: (data:boolean)=>{};
}

type item = {
  source: number; userName: string; description?: string,
} 
