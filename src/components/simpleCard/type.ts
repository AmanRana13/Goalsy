import {colors} from 'theme/colors';

export interface simpleCardProps {
  header: string;
  description: string;
  time: object;
  close?: boolean;
  source?: any;
  color: colors;
  disabled?: boolean;
  onPress?: () => {} | void;
  id?: number;
  ticketId?: number;
  isTicketClose?: boolean;
}
