import * as React from 'react';

export interface SpaceHorizontalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const SpaceHorizontalIcon = React.forwardRef<SVGSVGElement, SpaceHorizontalIconProps>(
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
      <path d="M2.3999 2.3999H21.5999M2.3999 21.5999H21.5999M4.7999 16.1999H19.1999C20.5254 16.1999 21.5999 15.1254 21.5999 13.7999V10.1999C21.5999 8.87442 20.5254 7.7999 19.1999 7.7999H4.7999C3.47442 7.7999 2.3999 8.87442 2.3999 10.1999V13.7999C2.3999 15.1254 3.47442 16.1999 4.7999 16.1999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

SpaceHorizontalIcon.displayName = 'SpaceHorizontalIcon';

export { SpaceHorizontalIcon };
export default SpaceHorizontalIcon;
