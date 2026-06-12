import * as React from 'react';

export interface SpaceVerticalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const SpaceVerticalIcon = React.forwardRef<SVGSVGElement, SpaceVerticalIconProps>(
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
      <path d="M21.5999 2.3999V21.5999M2.3999 2.3999L2.3999 21.5999M7.7999 4.7999L7.7999 19.1999C7.7999 20.5254 8.87442 21.5999 10.1999 21.5999H13.7999C15.1254 21.5999 16.1999 20.5254 16.1999 19.1999L16.1999 4.7999C16.1999 3.47442 15.1254 2.3999 13.7999 2.3999L10.1999 2.3999C8.87442 2.3999 7.7999 3.47442 7.7999 4.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

SpaceVerticalIcon.displayName = 'SpaceVerticalIcon';

export { SpaceVerticalIcon };
export default SpaceVerticalIcon;
