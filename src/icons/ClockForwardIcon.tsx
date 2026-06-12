import * as React from 'react';

export interface ClockForwardIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ClockForwardIcon = React.forwardRef<SVGSVGElement, ClockForwardIconProps>(
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
      <path d="M14.625 14.25L11.25 13.125V8.42087M20.25 12C20.25 7.02944 16.2206 3 11.25 3C6.27944 3 2.25 7.02944 2.25 12C2.25 16.9706 6.27944 21 11.25 21C14.5813 21 17.4898 19.1901 19.046 16.5M17.7811 11.0123L20.0311 13.2623L22.2811 11.0123" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ClockForwardIcon.displayName = 'ClockForwardIcon';

export { ClockForwardIcon };
export default ClockForwardIcon;
