import * as React from 'react';

export interface ArrowUpLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowUpLeftIcon = React.forwardRef<SVGSVGElement, ArrowUpLeftIconProps>(
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
      <path d="M15.4511 7.0498L7.05029 7.04981L7.05041 15.5718M7.05029 7.04981L16.9498 16.9493" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowUpLeftIcon.displayName = 'ArrowUpLeftIcon';

export { ArrowUpLeftIcon };
export default ArrowUpLeftIcon;
