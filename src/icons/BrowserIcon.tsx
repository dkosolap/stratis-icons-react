import * as React from 'react';

export interface BrowserIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BrowserIcon = React.forwardRef<SVGSVGElement, BrowserIconProps>(
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
      <path d="M2.9999 7.7999H20.9999M4.7999 21.5999C3.47442 21.5999 2.3999 20.5254 2.3999 19.1999V4.7999C2.3999 3.47442 3.47442 2.3999 4.7999 2.3999H19.1999C20.5254 2.3999 21.5999 3.47442 21.5999 4.7999V19.1999C21.5999 20.5254 20.5254 21.5999 19.1999 21.5999H4.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

BrowserIcon.displayName = 'BrowserIcon';

export { BrowserIcon };
export default BrowserIcon;
