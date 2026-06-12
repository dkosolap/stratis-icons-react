import * as React from 'react';

export interface Volume03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Volume03Icon = React.forwardRef<SVGSVGElement, Volume03IconProps>(
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
      <path d="M21 11.9174H15.9375M12.0161 6L7.64072 9.48865H3V14.5114L7.64072 14.5101L12.0161 18V6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Volume03Icon.displayName = 'Volume03Icon';

export { Volume03Icon };
export default Volume03Icon;
