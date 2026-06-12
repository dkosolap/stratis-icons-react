import * as React from 'react';

export interface ArrowCurveUpLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowCurveUpLeftIcon = React.forwardRef<SVGSVGElement, ArrowCurveUpLeftIconProps>(
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
      <path d="M14.8281 8.91362L9.51406 3.59961L4.20005 8.91362M9.51406 3.59961L9.51406 16.3996C9.51406 18.6087 11.3049 20.3996 13.5141 20.3996L19.8 20.3996" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowCurveUpLeftIcon.displayName = 'ArrowCurveUpLeftIcon';

export { ArrowCurveUpLeftIcon };
export default ArrowCurveUpLeftIcon;
