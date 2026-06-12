import * as React from 'react';

export interface CardMinusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CardMinusIcon = React.forwardRef<SVGSVGElement, CardMinusIconProps>(
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
      <path d="M13.6547 18.8999H4.05504C2.72959 18.8999 1.65508 17.8254 1.65504 16.5L1.65479 7.50016C1.65475 6.17465 2.72928 5.1001 4.05479 5.1001H18.4542C19.7798 5.1001 20.8543 6.17399 20.8543 7.49951L20.8543 11.7001M2.25432 9.29995H20.2543M17.2539 16.0457L22.3453 16.0454" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CardMinusIcon.displayName = 'CardMinusIcon';

export { CardMinusIcon };
export default CardMinusIcon;
