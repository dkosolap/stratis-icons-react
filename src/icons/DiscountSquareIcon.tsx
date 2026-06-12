import * as React from 'react';

export interface DiscountSquareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const DiscountSquareIcon = React.forwardRef<SVGSVGElement, DiscountSquareIconProps>(
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
      <path d="M8.3999 15.5999L15.5999 8.3999M8.9538 8.94924L8.93965 8.93495M15.0643 15.1226L15.0502 15.1083M2.3999 19.1999V4.7999C2.3999 3.47442 3.47442 2.3999 4.7999 2.3999H19.1999C20.5254 2.3999 21.5999 3.47442 21.5999 4.7999V19.1999C21.5999 20.5254 20.5254 21.5999 19.1999 21.5999H4.7999C3.47442 21.5999 2.3999 20.5254 2.3999 19.1999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

DiscountSquareIcon.displayName = 'DiscountSquareIcon';

export { DiscountSquareIcon };
export default DiscountSquareIcon;
