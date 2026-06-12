import * as React from 'react';

export interface ArrowCurveLeftDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowCurveLeftDownIcon = React.forwardRef<SVGSVGElement, ArrowCurveLeftDownIconProps>(
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
      <path d="M8.91411 9.17217L3.6001 14.4862L8.91411 19.8002M3.6001 14.4862H16.4001C18.6092 14.4862 20.4001 12.6953 20.4001 10.4862V4.2002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowCurveLeftDownIcon.displayName = 'ArrowCurveLeftDownIcon';

export { ArrowCurveLeftDownIcon };
export default ArrowCurveLeftDownIcon;
