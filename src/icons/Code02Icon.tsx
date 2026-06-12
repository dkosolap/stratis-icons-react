import * as React from 'react';

export interface Code02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Code02Icon = React.forwardRef<SVGSVGElement, Code02IconProps>(
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
      <path d="M10.7999 17.6998L13.1999 6.2998M5.9999 15.8998L2.3999 12.2998L5.9999 8.69981M17.9999 8.6998L21.5999 12.2998L17.9999 15.8998" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Code02Icon.displayName = 'Code02Icon';

export { Code02Icon };
export default Code02Icon;
