import * as React from 'react';

export interface Feather02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Feather02Icon = React.forwardRef<SVGSVGElement, Feather02IconProps>(
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
      <path d="M5.17533 19.1285L15.3577 8.94618M13.6606 16.9466L18.7518 11.8554C20.4924 10.1148 20.4924 7.29269 18.7518 5.55207C17.0112 3.81144 14.189 3.81144 12.4484 5.55207L7.35725 10.6432L7.35725 16.9466L13.6606 16.9466Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Feather02Icon.displayName = 'Feather02Icon';

export { Feather02Icon };
export default Feather02Icon;
