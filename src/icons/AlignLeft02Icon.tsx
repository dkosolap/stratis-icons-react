import * as React from 'react';

export interface AlignLeft02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignLeft02Icon = React.forwardRef<SVGSVGElement, AlignLeft02IconProps>(
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
      <path d="M13.0332 5.9999L7.1999 11.9999L13.0332 17.9999M7.1999 11.9999H21.5999M2.3999 2.3999V21.5999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignLeft02Icon.displayName = 'AlignLeft02Icon';

export { AlignLeft02Icon };
export default AlignLeft02Icon;
