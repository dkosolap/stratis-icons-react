import * as React from 'react';

export interface Image02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Image02Icon = React.forwardRef<SVGSVGElement, Image02IconProps>(
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
      <path d="M4.7999 21.6001H19.1999C20.5254 21.6001 21.5999 20.469 21.5999 19.0738V4.92643C21.5999 3.53119 20.5254 2.40012 19.1999 2.40012H4.7999C3.47442 2.40012 2.3999 3.53118 2.3999 4.92643V19.0738C2.3999 20.469 3.47442 21.6001 4.7999 21.6001Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.99991 15.6H17.9999L13.9999 8.6L10.9999 13.1L8.99991 11.1L5.99991 15.6Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Image02Icon.displayName = 'Image02Icon';

export { Image02Icon };
export default Image02Icon;
