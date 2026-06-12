import * as React from 'react';

export interface ArrowCurveRightUpIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowCurveRightUpIcon = React.forwardRef<SVGSVGElement, ArrowCurveRightUpIconProps>(
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
      <path d="M15.0859 14.8278L20.3999 9.51382L15.0859 4.19981M20.3999 9.51382L7.59991 9.51381C5.39077 9.51381 3.5999 11.3047 3.5999 13.5138L3.5999 19.7998" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowCurveRightUpIcon.displayName = 'ArrowCurveRightUpIcon';

export { ArrowCurveRightUpIcon };
export default ArrowCurveRightUpIcon;
