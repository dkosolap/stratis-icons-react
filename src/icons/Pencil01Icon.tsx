import * as React from 'react';

export interface Pencil01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Pencil01Icon = React.forwardRef<SVGSVGElement, Pencil01IconProps>(
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
      <path d="M4.7999 15.6004L8.9999 19.2004M4.1999 15.6004L16.0313 3.35582C17.3052 2.08192 19.3706 2.08191 20.6445 3.35581C21.9184 4.62971 21.9184 6.69512 20.6445 7.96902L8.3999 19.8004L2.3999 21.6004L4.1999 15.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Pencil01Icon.displayName = 'Pencil01Icon';

export { Pencil01Icon };
export default Pencil01Icon;
