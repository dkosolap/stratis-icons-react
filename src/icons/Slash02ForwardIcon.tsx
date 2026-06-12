import * as React from 'react';

export interface Slash02ForwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Slash02ForwardIcon = React.forwardRef<SVGSVGElement, Slash02ForwardIconProps>(
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
      <path d="M10.0002 4.84217L14.0002 19.1576" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Slash02ForwardIcon.displayName = 'Slash02ForwardIcon';

export { Slash02ForwardIcon };
export default Slash02ForwardIcon;
