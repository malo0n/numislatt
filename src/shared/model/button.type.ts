export interface buttonProps {
  text?: string;
  type?: 'primary' | 'secondary';
  icon?: string;
  className?: string;
  onClick?: () => void;
}