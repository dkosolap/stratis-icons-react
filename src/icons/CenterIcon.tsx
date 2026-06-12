import * as React from 'react';

export interface CenterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CenterIcon = React.forwardRef<SVGSVGElement, CenterIconProps>(
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
      <path d="M21 5.8125H3M21 18.1875H3M18.1875 21L18.1875 3M5.8125 21L5.8125 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

CenterIcon.displayName = 'CenterIcon';

export { CenterIcon };
export default CenterIcon;
