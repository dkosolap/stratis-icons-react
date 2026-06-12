import * as React from 'react';

export interface IndentIncreaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const IndentIncreaseIcon = React.forwardRef<SVGSVGElement, IndentIncreaseIconProps>(
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
      <path d="M21.5999 4.7998H8.3999M21.5999 9.59981H13.1999M21.5999 19.1998H8.3999M2.3999 7.19981L7.1999 11.9998L2.3999 16.7998M21.5999 14.3998H13.1999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

IndentIncreaseIcon.displayName = 'IndentIncreaseIcon';

export { IndentIncreaseIcon };
export default IndentIncreaseIcon;
