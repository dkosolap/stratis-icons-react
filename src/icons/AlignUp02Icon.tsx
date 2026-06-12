import * as React from 'react';

export interface AlignUp02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignUp02Icon = React.forwardRef<SVGSVGElement, AlignUp02IconProps>(
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
      <path d="M17.9999 13.0332L11.9999 7.1999L5.9999 13.0332M11.9999 7.1999L11.9999 21.5999M21.5999 2.3999L2.3999 2.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignUp02Icon.displayName = 'AlignUp02Icon';

export { AlignUp02Icon };
export default AlignUp02Icon;
