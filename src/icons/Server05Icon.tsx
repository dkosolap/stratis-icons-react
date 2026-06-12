import * as React from 'react';

export interface Server05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Server05Icon = React.forwardRef<SVGSVGElement, Server05IconProps>(
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
      <path d="M17.9999 7.7998C17.9999 11.1135 15.3136 13.7998 11.9999 13.7998M17.9999 7.7998C17.9999 4.4861 15.3136 1.7998 11.9999 1.7998M17.9999 7.7998H5.9999M11.9999 13.7998C8.68619 13.7998 5.9999 11.1135 5.9999 7.7998M11.9999 13.7998C13.3254 13.7998 14.3999 11.1135 14.3999 7.7998C14.3999 4.4861 13.3254 1.7998 11.9999 1.7998M11.9999 13.7998C10.6744 13.7998 9.5999 11.1135 9.5999 7.7998C9.5999 4.4861 10.6744 1.7998 11.9999 1.7998M5.9999 7.7998C5.9999 4.4861 8.68619 1.7998 11.9999 1.7998M14.3999 19.7998C14.3999 21.1253 13.3254 22.1998 11.9999 22.1998C10.6744 22.1998 9.5999 21.1253 9.5999 19.7998M14.3999 19.7998C14.3999 18.4743 13.3254 17.3998 11.9999 17.3998C10.6744 17.3998 9.5999 18.4743 9.5999 19.7998M14.3999 19.7998H21.5999M9.5999 19.7998H2.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Server05Icon.displayName = 'Server05Icon';

export { Server05Icon };
export default Server05Icon;
