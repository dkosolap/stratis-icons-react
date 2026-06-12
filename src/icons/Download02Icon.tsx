import * as React from 'react';

export interface Download02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Download02Icon = React.forwardRef<SVGSVGElement, Download02IconProps>(
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
      <path d="M4 15.2044L4 18.8925C4 19.4514 4.21071 19.9875 4.58579 20.3827C4.96086 20.778 5.46957 21 6 21H18C18.5304 21 19.0391 20.778 19.4142 20.3827C19.7893 19.9875 20 19.4514 20 18.8925V15.2044M12.0011 3V14.9425M7.42969 10.3793L12.0011 14.9425L16.5725 10.3793" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Download02Icon.displayName = 'Download02Icon';

export { Download02Icon };
export default Download02Icon;
