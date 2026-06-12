import * as React from 'react';

export interface Slash01BackwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Slash01BackwardIcon = React.forwardRef<SVGSVGElement, Slash01BackwardIconProps>(
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
      <path d="M6.90878 3.1817L17.0911 20.818" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Slash01BackwardIcon.displayName = 'Slash01BackwardIcon';

export { Slash01BackwardIcon };
export default Slash01BackwardIcon;
