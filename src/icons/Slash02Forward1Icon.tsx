import * as React from 'react';

export interface Slash02Forward1IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Slash02Forward1Icon = React.forwardRef<SVGSVGElement, Slash02Forward1IconProps>(
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
      <path d="M10.0002 19.1578L14.0002 4.84236" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Slash02Forward1Icon.displayName = 'Slash02Forward1Icon';

export { Slash02Forward1Icon };
export default Slash02Forward1Icon;
