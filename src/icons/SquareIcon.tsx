import * as React from 'react';

export interface SquareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const SquareIcon = React.forwardRef<SVGSVGElement, SquareIconProps>(
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
      <path d="M17.9999 2.40039C19.9881 2.40039 21.5999 4.01217 21.5999 6.00039V18.0005C21.5999 19.9887 19.9881 21.6005 17.9999 21.6005H5.9999C4.01168 21.6005 2.3999 19.9887 2.3999 18.0005L2.3999 6.00039C2.3999 4.01217 4.01168 2.40039 5.9999 2.40039L17.9999 2.40039Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

SquareIcon.displayName = 'SquareIcon';

export { SquareIcon };
export default SquareIcon;
