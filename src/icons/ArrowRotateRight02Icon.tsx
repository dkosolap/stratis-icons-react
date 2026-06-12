import * as React from 'react';

export interface ArrowRotateRight02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowRotateRight02Icon = React.forwardRef<SVGSVGElement, ArrowRotateRight02IconProps>(
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
      <path d="M19.1288 14.5C18.1109 17.6939 15.1954 20 11.7576 20C7.47319 20 4 16.4183 4 12C4 7.58172 7.47319 4 11.7576 4C14.2706 4 16.5045 5.23225 17.9221 7.14279M18.4773 8C18.3099 7.70154 18.1243 7.41526 17.9221 7.14279M17.9221 7.14279L16.1212 9H20V5L17.9221 7.14279ZM18.0606 8.66667L19.2727 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRotateRight02Icon.displayName = 'ArrowRotateRight02Icon';

export { ArrowRotateRight02Icon };
export default ArrowRotateRight02Icon;
