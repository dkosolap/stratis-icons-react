import * as React from 'react';

export interface LineHeightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LineHeightIcon = React.forwardRef<SVGSVGElement, LineHeightIconProps>(
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
      <path d="M9.77647 8.38824L6.38823 5L3 8.38824M6.38823 5V20.8118M9.77647 17.4235L6.38823 20.8118L3 17.4235M14.2941 6.12941H22.2M14.2941 15.1647H22.2M14.2941 19.6824H22.2M14.2941 10.6471H22.2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

LineHeightIcon.displayName = 'LineHeightIcon';

export { LineHeightIcon };
export default LineHeightIcon;
