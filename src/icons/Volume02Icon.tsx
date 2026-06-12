import * as React from 'react';

export interface Volume02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Volume02Icon = React.forwardRef<SVGSVGElement, Volume02IconProps>(
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
      <path d="M21 9.72431L18.75 11.9173M18.75 11.9173L16.5 14.1102M18.75 11.9173L21 14.1102M18.75 11.9173L16.5 9.72431M12.0161 6L7.64072 9.48865H3V14.5114L7.64072 14.5101L12.0161 18V6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Volume02Icon.displayName = 'Volume02Icon';

export { Volume02Icon };
export default Volume02Icon;
