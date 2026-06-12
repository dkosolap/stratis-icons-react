import * as React from 'react';

export interface Marker03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Marker03Icon = React.forwardRef<SVGSVGElement, Marker03IconProps>(
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
      <path d="M14.4004 9.60835C14.4004 10.9338 13.3259 12.0084 12.0004 12.0084C10.6749 12.0084 9.60041 10.9338 9.60041 9.60835C9.60041 8.28287 10.6749 7.20836 12.0004 7.20836C13.3259 7.20836 14.4004 8.28287 14.4004 9.60835Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Marker03Icon.displayName = 'Marker03Icon';

export { Marker03Icon };
export default Marker03Icon;
