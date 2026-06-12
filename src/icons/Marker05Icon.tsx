import * as React from 'react';

export interface Marker05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Marker05Icon = React.forwardRef<SVGSVGElement, Marker05IconProps>(
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
      <path d="M11.9999 17V9V3L17.3999 7.2L12.5999 10.8M8.3999 13.2908C4.88171 13.8841 2.3999 15.3213 2.3999 17C2.3999 19.2091 6.69797 21 11.9999 21C17.3018 21 21.5999 19.2091 21.5999 17C21.5999 15.3213 19.1181 13.8841 15.5999 13.2908" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Marker05Icon.displayName = 'Marker05Icon';

export { Marker05Icon };
export default Marker05Icon;
