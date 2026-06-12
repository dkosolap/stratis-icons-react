import * as React from 'react';

export interface Header02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Header02Icon = React.forwardRef<SVGSVGElement, Header02IconProps>(
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
      <path d="M8.26133 16.8002V11.8156M8.26133 16.8002H6.59979M8.26133 16.8002H9.92287M8.26133 11.8156V6.83097M8.26133 11.8156H15.7383M8.26133 6.83097H6.59979M8.26133 6.83097H9.92287M15.7383 11.8156V16.8002M15.7383 11.8156V6.83097M15.7383 16.8002H14.0767M15.7383 16.8002H17.3998M15.7383 6.83097H14.0767M15.7383 6.83097H17.3998M4.7999 21.6004H19.1999C20.5254 21.6004 21.5999 20.5259 21.5999 19.2004V4.80039C21.5999 3.47491 20.5254 2.40039 19.1999 2.40039H4.7999C3.47442 2.40039 2.3999 3.47491 2.3999 4.80039V19.2004C2.3999 20.5259 3.47442 21.6004 4.7999 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Header02Icon.displayName = 'Header02Icon';

export { Header02Icon };
export default Header02Icon;
