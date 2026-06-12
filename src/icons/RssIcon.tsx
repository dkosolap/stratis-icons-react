import * as React from 'react';

export interface RssIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const RssIcon = React.forwardRef<SVGSVGElement, RssIconProps>(
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
      <path d="M4 4C12.8366 4 20 11.1634 20 20M4 12C8.41828 12 12 15.5817 12 20M4 20H4.04688" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

RssIcon.displayName = 'RssIcon';

export { RssIcon };
export default RssIcon;
