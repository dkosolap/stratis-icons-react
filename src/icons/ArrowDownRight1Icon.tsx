import * as React from 'react';

export interface ArrowDownRight1IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowDownRight1Icon = React.forwardRef<SVGSVGElement, ArrowDownRight1IconProps>(
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
      <path d="M9.17193 15.0859L14.4859 20.3999L19.8 15.0859M14.4859 20.3999L14.4859 7.59991C14.4859 5.39077 12.6951 3.5999 10.4859 3.5999L4.19995 3.5999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowDownRight1Icon.displayName = 'ArrowDownRight1Icon';

export { ArrowDownRight1Icon };
export default ArrowDownRight1Icon;
