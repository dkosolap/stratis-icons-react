import * as React from 'react';

export interface SpaceHeightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const SpaceHeightIcon = React.forwardRef<SVGSVGElement, SpaceHeightIconProps>(
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
      <path d="M21.5999 21.5999H2.3999M21.5999 2.3999L2.3999 2.3999M9.5999 15.5693L11.9999 17.9999L14.3999 15.5693M11.9999 17.9999L11.9999 5.9999M14.3999 8.43046L11.9999 5.9999L9.5999 8.43046" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

SpaceHeightIcon.displayName = 'SpaceHeightIcon';

export { SpaceHeightIcon };
export default SpaceHeightIcon;
