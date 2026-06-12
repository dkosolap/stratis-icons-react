import * as React from 'react';

export interface Mail04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Mail04Icon = React.forwardRef<SVGSVGElement, Mail04IconProps>(
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
      <path d="M4.5 10.5H3V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V10.5H19.5M4.5 10.5L12 15L19.5 10.5M4.5 10.5V6C4.5 4.34315 5.84315 3 7.5 3H16.5C18.1569 3 19.5 4.34315 19.5 6V10.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Mail04Icon.displayName = 'Mail04Icon';

export { Mail04Icon };
export default Mail04Icon;
