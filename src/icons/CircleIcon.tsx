import * as React from 'react';

export interface CircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CircleIcon = React.forwardRef<SVGSVGElement, CircleIconProps>(
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
      <path d="M21.5999 12.0004C21.5999 17.3023 17.3018 21.6004 11.9999 21.6004C6.69797 21.6004 2.3999 17.3023 2.3999 12.0004C2.3999 6.69846 6.69797 2.40039 11.9999 2.40039C17.3018 2.40039 21.5999 6.69846 21.5999 12.0004Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

CircleIcon.displayName = 'CircleIcon';

export { CircleIcon };
export default CircleIcon;
