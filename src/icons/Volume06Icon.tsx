import * as React from 'react';

export interface Volume06IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Volume06Icon = React.forwardRef<SVGSVGElement, Volume06IconProps>(
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
      <path d="M18.7692 9.34474C20.2486 11.1677 20.4575 13.5939 19.0503 15.7409M13.9598 5L9.07702 9.0698H4V14.9296L9.07702 14.9282L13.9598 19V5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Volume06Icon.displayName = 'Volume06Icon';

export { Volume06Icon };
export default Volume06Icon;
