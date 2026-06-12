import * as React from 'react';

export interface AlignDown02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignDown02Icon = React.forwardRef<SVGSVGElement, AlignDown02IconProps>(
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
      <path d="M5.9999 10.9666L11.9999 16.7999L17.9999 10.9666M11.9999 16.7999L11.9999 2.3999M2.3999 21.5999H21.5999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignDown02Icon.displayName = 'AlignDown02Icon';

export { AlignDown02Icon };
export default AlignDown02Icon;
