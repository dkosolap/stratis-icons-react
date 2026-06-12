import * as React from 'react';

export interface Marker01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Marker01Icon = React.forwardRef<SVGSVGElement, Marker01IconProps>(
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
      <path d="M3 21H7.90909M5.45455 12.3913V3H21L18.5455 7.69565L21 12.3913H5.45455ZM5.45455 12.3913V20.2174" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Marker01Icon.displayName = 'Marker01Icon';

export { Marker01Icon };
export default Marker01Icon;
