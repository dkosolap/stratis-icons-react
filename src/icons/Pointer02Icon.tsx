import * as React from 'react';

export interface Pointer02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Pointer02Icon = React.forwardRef<SVGSVGElement, Pointer02IconProps>(
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
      <path d="M12.2961 18.1449L18.444 21.1339C19.5964 21.6942 20.8256 20.5223 20.3209 19.3445L13.5257 3.48666C13.0529 2.38349 11.496 2.36408 10.9959 3.45512L3.69343 19.387C3.15979 20.5512 4.35798 21.7532 5.5239 21.2232L12.2961 18.1449Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Pointer02Icon.displayName = 'Pointer02Icon';

export { Pointer02Icon };
export default Pointer02Icon;
