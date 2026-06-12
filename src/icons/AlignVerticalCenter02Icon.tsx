import * as React from 'react';

export interface AlignVerticalCenter02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignVerticalCenter02Icon = React.forwardRef<SVGSVGElement, AlignVerticalCenter02IconProps>(
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
      <path d="M16.7999 11.9999H21.5999M2.3999 11.9999L7.7999 11.9999M7.7999 4.7999L7.7999 19.1999C7.7999 20.5254 8.87442 21.5999 10.1999 21.5999H13.7999C15.1254 21.5999 16.1999 20.5254 16.1999 19.1999V4.7999C16.1999 3.47442 15.1254 2.3999 13.7999 2.3999L10.1999 2.3999C8.87442 2.3999 7.7999 3.47442 7.7999 4.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignVerticalCenter02Icon.displayName = 'AlignVerticalCenter02Icon';

export { AlignVerticalCenter02Icon };
export default AlignVerticalCenter02Icon;
