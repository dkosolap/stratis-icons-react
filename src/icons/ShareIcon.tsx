import * as React from 'react';

export interface ShareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ShareIcon = React.forwardRef<SVGSVGElement, ShareIconProps>(
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
      <path d="M21.0002 11.4591L11.4002 5.1001L11.4002 8.7001C3 10.5001 3 18.9001 3 18.9001C3 18.9001 6.6 14.1001 11.4002 14.7001L11.4002 18.4201L21.0002 11.4591Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

ShareIcon.displayName = 'ShareIcon';

export { ShareIcon };
export default ShareIcon;
