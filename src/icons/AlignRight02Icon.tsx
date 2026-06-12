import * as React from 'react';

export interface AlignRight02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignRight02Icon = React.forwardRef<SVGSVGElement, AlignRight02IconProps>(
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
      <path d="M10.9666 17.9999L16.7999 11.9999L10.9666 5.9999M16.7999 11.9999L2.3999 11.9999M21.5999 21.5999L21.5999 2.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignRight02Icon.displayName = 'AlignRight02Icon';

export { AlignRight02Icon };
export default AlignRight02Icon;
