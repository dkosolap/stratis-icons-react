import * as React from 'react';

export interface Minimise02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Minimise02Icon = React.forwardRef<SVGSVGElement, Minimise02IconProps>(
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
      <path d="M10.511 20.4411L10.511 13.4894L3.55926 13.4894M10.511 13.4894L2.40063 21.5997M13.4889 3.55852V10.5103L20.4406 10.5103M13.4889 10.5103L21.5993 2.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Minimise02Icon.displayName = 'Minimise02Icon';

export { Minimise02Icon };
export default Minimise02Icon;
