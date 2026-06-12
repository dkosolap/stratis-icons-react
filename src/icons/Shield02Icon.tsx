import * as React from 'react';

export interface Shield02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Shield02Icon = React.forwardRef<SVGSVGElement, Shield02IconProps>(
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
      <path d="M13.3417 3.07081C12.4971 2.64852 11.503 2.64852 10.6584 3.07081L4.80005 5.99999V14.028C4.80005 16.2 7.36245 18.6712 12 21.6C16.6377 18.6712 19.2001 16.8 19.2001 14.028C19.2001 11.256 19.2001 5.99999 19.2001 5.99999L13.3417 3.07081Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Shield02Icon.displayName = 'Shield02Icon';

export { Shield02Icon };
export default Shield02Icon;
