import * as React from 'react';

export interface CardAddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CardAddIcon = React.forwardRef<SVGSVGElement, CardAddIconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.8403 18.6397H4.24059C2.91513 18.6397 1.84063 17.5652 1.84059 16.2397L1.84033 7.23991C1.84029 5.9144 2.91482 4.83984 4.24033 4.83984H18.6398C19.9653 4.83984 21.0398 5.91374 21.0398 7.23926L21.0399 11.4398M2.43987 9.0397H20.4399M19.6336 19.16L19.6336 16.6338M19.6336 16.6338L19.6336 14.1076M19.6336 16.6338H17.1074M19.6336 16.6338H22.1598" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CardAddIcon.displayName = 'CardAddIcon';

export { CardAddIcon };
export default CardAddIcon;
