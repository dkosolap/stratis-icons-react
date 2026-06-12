import * as React from 'react';

export interface Attatchment02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Attatchment02Icon = React.forwardRef<SVGSVGElement, Attatchment02IconProps>(
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
      <path d="M17.4809 6.07172L17.4809 17.281C17.4809 20.3319 15.3732 22.7998 12.2626 22.7998C9.21166 22.7998 7.19995 20.3916 7.19995 17.281L7.19995 4.6806C7.19995 2.75213 8.75227 1.19981 10.6807 1.19981C12.6092 1.19981 14.1615 2.75213 14.1615 4.6806L14.1615 17.5022C14.1615 18.4634 13.3823 19.2426 12.4211 19.2426C11.4599 19.2426 10.6807 18.4634 10.6807 17.5022L10.6807 6.07172" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Attatchment02Icon.displayName = 'Attatchment02Icon';

export { Attatchment02Icon };
export default Attatchment02Icon;
