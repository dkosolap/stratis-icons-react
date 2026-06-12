import * as React from 'react';

export interface ArrowCurveLeftRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowCurveLeftRightIcon = React.forwardRef<SVGSVGElement, ArrowCurveLeftRightIconProps>(
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
      <path d="M15.0859 9.17217L20.3999 14.4862L15.0859 19.8002M20.3999 14.4862H7.59991C5.39077 14.4862 3.5999 12.6953 3.5999 10.4862V4.2002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowCurveLeftRightIcon.displayName = 'ArrowCurveLeftRightIcon';

export { ArrowCurveLeftRightIcon };
export default ArrowCurveLeftRightIcon;
