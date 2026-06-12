import * as React from 'react';

export interface ArrowCurveLeftUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowCurveLeftUpIcon = React.forwardRef<SVGSVGElement, ArrowCurveLeftUpIconProps>(
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
      <path d="M8.91411 14.8278L3.6001 9.51381L8.91411 4.1998M3.6001 9.51381L16.4001 9.51382C18.6092 9.51382 20.4001 11.3047 20.4001 13.5138L20.4001 19.7998" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowCurveLeftUpIcon.displayName = 'ArrowCurveLeftUpIcon';

export { ArrowCurveLeftUpIcon };
export default ArrowCurveLeftUpIcon;
