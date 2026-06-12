import * as React from 'react';

export interface Laptop01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Laptop01Icon = React.forwardRef<SVGSVGElement, Laptop01IconProps>(
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
      <path d="M20.3999 15.6V6.23072C20.3999 5.10916 19.4597 4.19995 18.2999 4.19995H5.6999C4.5401 4.19995 3.5999 5.10916 3.5999 6.23072V15.6M20.3999 15.6C21.0626 15.6 21.5999 16.1372 21.5999 16.8V18.6C21.5999 19.2627 21.0626 19.8 20.3999 19.8H3.5999C2.93716 19.8 2.3999 19.2627 2.3999 18.6V16.8C2.3999 16.1372 2.93716 15.6 3.5999 15.6M20.3999 15.6H16.1999L14.3999 16.8H9.8999L7.7999 15.6H3.5999" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Laptop01Icon.displayName = 'Laptop01Icon';

export { Laptop01Icon };
export default Laptop01Icon;
