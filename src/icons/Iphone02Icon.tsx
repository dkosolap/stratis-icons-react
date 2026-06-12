import * as React from 'react';

export interface Iphone02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Iphone02Icon = React.forwardRef<SVGSVGElement, Iphone02IconProps>(
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
      <path d="M8.40005 3.59992L10 5.99992H14L15.6 3.59992M4.80005 4.7999V19.1999C4.80005 20.5254 5.87457 21.5999 7.20005 21.5999H16.8C18.1255 21.5999 19.2 20.5254 19.2 19.1999V4.79992C19.2 3.47443 18.1255 2.39992 16.8001 2.39992L7.20005 2.3999C5.87457 2.3999 4.80005 3.47442 4.80005 4.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Iphone02Icon.displayName = 'Iphone02Icon';

export { Iphone02Icon };
export default Iphone02Icon;
