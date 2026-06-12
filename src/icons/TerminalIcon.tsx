import * as React from 'react';

export interface TerminalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TerminalIcon = React.forwardRef<SVGSVGElement, TerminalIconProps>(
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
      <path d="M10.7477 18.6783H21.5999M2.39991 5.32178L9.07816 12L2.3999 18.6783" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TerminalIcon.displayName = 'TerminalIcon';

export { TerminalIcon };
export default TerminalIcon;
