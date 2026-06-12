import * as React from 'react';

export interface SpaceWidthIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const SpaceWidthIcon = React.forwardRef<SVGSVGElement, SpaceWidthIconProps>(
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
      <path d="M21.5999 2.3999V21.5999M2.3999 2.3999V21.5999M15.5693 14.3999L17.9999 11.9999L15.5693 9.5999M17.9999 11.9999H5.9999M8.43046 9.5999L5.9999 11.9999L8.43046 14.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

SpaceWidthIcon.displayName = 'SpaceWidthIcon';

export { SpaceWidthIcon };
export default SpaceWidthIcon;
