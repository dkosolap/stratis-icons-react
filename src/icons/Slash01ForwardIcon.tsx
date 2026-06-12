import * as React from 'react';

export interface Slash01ForwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Slash01ForwardIcon = React.forwardRef<SVGSVGElement, Slash01ForwardIconProps>(
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
      <path d="M6.90888 20.818L17.0912 3.1817" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Slash01ForwardIcon.displayName = 'Slash01ForwardIcon';

export { Slash01ForwardIcon };
export default Slash01ForwardIcon;
