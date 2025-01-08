import { 
  Gauge, 
  Grid2x2, 
  Heart, 
  MessagesSquare, 
  ListChecks, 
  Rows3, 
  Gift, 
  CalendarDays, 
  ClipboardCheck, 
  UsersRound, 
  Banknote, 
  AlignEndHorizontal, 
  UserRound,
  Grid3x3,
  Settings,
  Power
} from 'lucide-react';

export const mainNavItems = [
  { icon: Gauge, label: 'Dashboard' },
  { icon: Grid2x2, label: 'Products' },
  { icon: Heart, label: 'Favorites' },
  { icon: MessagesSquare, label: 'Inbox' },
  { icon: ListChecks, label: 'Order Lists' },
  { icon: Rows3, label: 'Product Stock' },
];

export const pageNavItems = [
  { icon: Gift, label: 'Pricing' },
  { icon: CalendarDays, label: 'Calender' },
  { icon: ClipboardCheck, label: 'To-Do' },
  { icon: UsersRound, label: 'Contact' },
  { icon: Banknote, label: 'Invoice' },
  { icon: AlignEndHorizontal, label: 'UI Elements' },
  { icon: UserRound, label: 'Team' },
  { icon: Grid3x3, label: 'Table' },
];

export const optionsNavItems = [
  { icon: Settings, label: 'Settings' },
  { icon: Power, label: 'Logout' },
];