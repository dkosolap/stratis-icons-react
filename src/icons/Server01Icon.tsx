import * as React from 'react';

export interface Server01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Server01Icon = React.forwardRef<SVGSVGElement, Server01IconProps>(
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
      <path d="M16.8001 11.9999H7.1999M16.8001 11.9999C19.451 11.9999 21.6001 9.85087 21.6001 7.1999C21.6001 4.54894 19.451 2.3999 16.8001 2.3999H7.1999C4.54888 2.3999 2.39982 4.54903 2.3999 7.20006C2.39999 9.85096 4.549 11.9999 7.1999 11.9999M16.8001 11.9999C19.451 11.9999 21.6001 14.1489 21.6001 16.7999C21.6001 19.4509 19.451 21.5999 16.8001 21.5999H7.1999C4.549 21.5999 2.39999 19.451 2.3999 16.8001C2.39982 14.149 4.54887 11.9999 7.1999 11.9999M17.3997 7.1999H11.3997M17.3997 16.7999H11.3997M6.59975 16.8901V16.7999M6.59975 7.1999V7.10967" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Server01Icon.displayName = 'Server01Icon';

export { Server01Icon };
export default Server01Icon;
