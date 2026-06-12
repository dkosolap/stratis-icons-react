import * as React from 'react';

export interface OctagonIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const OctagonIcon = React.forwardRef<SVGSVGElement, OctagonIconProps>(
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
      <path d="M15.9438 2.40039L21.5769 8.00094L21.5999 15.9443L15.9994 21.5774L8.05598 21.6004L2.4229 15.9998L2.3999 8.05647L8.00045 2.42339L15.9438 2.40039Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

OctagonIcon.displayName = 'OctagonIcon';

export { OctagonIcon };
export default OctagonIcon;
