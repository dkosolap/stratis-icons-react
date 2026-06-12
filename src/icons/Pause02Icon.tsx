import * as React from 'react';

export interface Pause02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Pause02Icon = React.forwardRef<SVGSVGElement, Pause02IconProps>(
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
      <path d="M9.5999 15.5999V8.3999M14.3999 15.5999V8.3999M11.9999 21.5999C6.69797 21.5999 2.3999 17.3018 2.3999 11.9999C2.3999 6.69797 6.69797 2.3999 11.9999 2.3999C17.3018 2.3999 21.5999 6.69797 21.5999 11.9999C21.5999 17.3018 17.3018 21.5999 11.9999 21.5999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Pause02Icon.displayName = 'Pause02Icon';

export { Pause02Icon };
export default Pause02Icon;
