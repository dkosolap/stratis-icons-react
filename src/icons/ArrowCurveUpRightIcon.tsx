import * as React from 'react';

export interface ArrowCurveUpRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowCurveUpRightIcon = React.forwardRef<SVGSVGElement, ArrowCurveUpRightIconProps>(
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
      <path d="M9.17193 8.91411L14.4859 3.6001L19.8 8.91411M14.4859 3.6001L14.4859 16.4001C14.4859 18.6092 12.6951 20.4001 10.4859 20.4001L4.19995 20.4001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowCurveUpRightIcon.displayName = 'ArrowCurveUpRightIcon';

export { ArrowCurveUpRightIcon };
export default ArrowCurveUpRightIcon;
