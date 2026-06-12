import * as React from 'react';

export interface ActivityIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ActivityIcon = React.forwardRef<SVGSVGElement, ActivityIconProps>(
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
      <path d="M4 11.6661H8L10.0404 5L14.4382 19L15.9903 11.6661H20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ActivityIcon.displayName = 'ActivityIcon';

export { ActivityIcon };
export default ActivityIcon;
