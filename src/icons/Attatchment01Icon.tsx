import * as React from 'react';

export interface Attatchment01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Attatchment01Icon = React.forwardRef<SVGSVGElement, Attatchment01IconProps>(
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
      <path d="M20.2982 12.241L12.3721 20.1671C10.2147 22.3244 6.97931 22.5792 4.77977 20.3796C2.62244 18.2223 2.90283 15.0969 5.10237 12.8974L14.0122 3.98759C15.3758 2.62396 17.5711 2.62396 18.9347 3.98759C20.2984 5.35122 20.2984 7.54654 18.9347 8.91017L9.8685 17.9764C9.18884 18.6561 8.08688 18.6561 7.40721 17.9764C6.72754 17.2968 6.72754 16.1948 7.40721 15.5151L15.4898 7.43255" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Attatchment01Icon.displayName = 'Attatchment01Icon';

export { Attatchment01Icon };
export default Attatchment01Icon;
