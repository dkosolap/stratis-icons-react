import * as React from 'react';

export interface InformationCircleContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const InformationCircleContainedIcon = React.forwardRef<SVGSVGElement, InformationCircleContainedIconProps>(
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
      <path d="M12 12L12 16.5M12 8.66455V8.625M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

InformationCircleContainedIcon.displayName = 'InformationCircleContainedIcon';

export { InformationCircleContainedIcon };
export default InformationCircleContainedIcon;
