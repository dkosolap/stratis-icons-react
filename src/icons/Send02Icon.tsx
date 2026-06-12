import * as React from 'react';

export interface Send02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Send02Icon = React.forwardRef<SVGSVGElement, Send02IconProps>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23.3124 12.0002L10.673 12.0003M5.34676 16.1696H2.91245M5.34676 12.1467H0.512451M5.34676 8.1238H2.91245M9.61984 4.5962L22.8752 11.023C23.6915 11.4188 23.6915 12.5817 22.8752 12.9775L9.61984 19.4043C8.71176 19.8446 7.74657 18.9163 8.15107 17.9918L10.5819 12.4356C10.7033 12.158 10.7033 11.8425 10.5819 11.565L8.15107 6.00872C7.74657 5.08415 8.71176 4.15592 9.61984 4.5962Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Send02Icon.displayName = 'Send02Icon';

export { Send02Icon };
export default Send02Icon;
