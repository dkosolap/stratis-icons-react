import * as React from 'react';

export interface Refresh011IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Refresh011Icon = React.forwardRef<SVGSVGElement, Refresh011IconProps>(
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
      <path d="M5.81605 14.4L2.3999 18L5.81605 21.6M2.3999 18H19.1999C20.5254 18 21.5999 16.9255 21.5999 15.6V12M18.1838 9.60002L21.5999 6.00002L18.1838 2.40002M21.5999 6.00002L4.7999 6.00002C3.47442 6.00002 2.3999 7.07454 2.3999 8.40002L2.3999 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Refresh011Icon.displayName = 'Refresh011Icon';

export { Refresh011Icon };
export default Refresh011Icon;
