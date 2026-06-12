import * as React from 'react';

export interface ServerDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ServerDownIcon = React.forwardRef<SVGSVGElement, ServerDownIconProps>(
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
      <path d="M17.3997 16.7999H11.3997M6.59975 16.8901V16.7999M9.59975 6.06774L11.9455 8.3999L14.3997 5.95733M11.9455 8.3999V2.3999M16.8001 11.9999H7.1999C4.54887 11.9999 2.39982 14.149 2.3999 16.8001C2.39999 19.451 4.549 21.5999 7.1999 21.5999H16.8001C19.451 21.5999 21.6001 19.4509 21.6001 16.7999C21.6001 14.1489 19.451 11.9999 16.8001 11.9999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ServerDownIcon.displayName = 'ServerDownIcon';

export { ServerDownIcon };
export default ServerDownIcon;
