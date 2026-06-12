import * as React from 'react';

export interface PerspectiveIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PerspectiveIcon = React.forwardRef<SVGSVGElement, PerspectiveIconProps>(
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
      <path d="M11.9999 3.60894V20.401M2.3999 12.0049H21.5999M18.9599 21.6004L4.5599 19.8012C3.3599 19.6813 2.3999 18.7218 2.3999 17.5223V6.48757C2.3999 5.28814 3.3599 4.3286 4.5599 4.20865L18.9599 2.40951C20.3999 2.28957 21.5999 3.36905 21.5999 4.68843V19.2015C21.5999 20.6408 20.2799 21.7203 18.9599 21.4804V21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PerspectiveIcon.displayName = 'PerspectiveIcon';

export { PerspectiveIcon };
export default PerspectiveIcon;
