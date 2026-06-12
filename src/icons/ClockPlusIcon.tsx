import * as React from 'react';

export interface ClockPlusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ClockPlusIcon = React.forwardRef<SVGSVGElement, ClockPlusIconProps>(
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
      <path d="M14.625 14.25L11.25 13.125V8.42087M20.25 12C20.25 7.02944 16.2206 3 11.25 3C6.27944 3 2.25 7.02944 2.25 12C2.25 16.9706 6.27944 21 11.25 21C11.8268 21 12.3909 20.9457 12.9375 20.8421M18.5625 15.375V18.1875M18.5625 18.1875V21M18.5625 18.1875H21.375M18.5625 18.1875H15.75" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ClockPlusIcon.displayName = 'ClockPlusIcon';

export { ClockPlusIcon };
export default ClockPlusIcon;
