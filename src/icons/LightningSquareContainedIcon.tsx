import * as React from 'react';

export interface LightningSquareContainedIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LightningSquareContainedIcon = React.forwardRef<SVGSVGElement, LightningSquareContainedIconProps>(
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
      <path d="M6.375 21C4.51104 21 3 19.489 3 17.625V6.37498C3 4.51103 4.51104 3 6.375 3H17.625C19.489 3 21 4.51103 21 6.37498L21 17.625C21 19.489 19.489 21 17.625 21H6.375Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
<path d="M7.5 13.4999L12.75 6.37498V11.25H16.5L11.25 17.6249V13.4999H7.5Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

LightningSquareContainedIcon.displayName = 'LightningSquareContainedIcon';

export { LightningSquareContainedIcon };
export default LightningSquareContainedIcon;
