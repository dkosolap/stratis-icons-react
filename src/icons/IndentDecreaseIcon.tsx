import * as React from 'react';

export interface IndentDecreaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const IndentDecreaseIcon = React.forwardRef<SVGSVGElement, IndentDecreaseIconProps>(
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
      <path d="M21.5999 4.7998H13.1999M21.5999 9.59981H10.7999M21.5999 19.1998H13.1999M7.1999 7.19981L2.3999 11.9998L7.1999 16.7998M21.5999 14.3998H10.7999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

IndentDecreaseIcon.displayName = 'IndentDecreaseIcon';

export { IndentDecreaseIcon };
export default IndentDecreaseIcon;
