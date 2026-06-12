import * as React from 'react';

export interface IndentRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const IndentRightIcon = React.forwardRef<SVGSVGElement, IndentRightIconProps>(
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
      <path d="M21.5999 19.1996L2.3999 19.1996M11.9999 13.9996H2.3999M11.9999 8.79961L2.3999 8.79961M21.5999 3.59961L2.39991 3.59961M21.5999 8.39961L21.6004 14.3996L16.7999 11.3996L21.5999 8.39961Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

IndentRightIcon.displayName = 'IndentRightIcon';

export { IndentRightIcon };
export default IndentRightIcon;
