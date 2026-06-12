import * as React from 'react';

export interface ProgressIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ProgressIcon = React.forwardRef<SVGSVGElement, ProgressIconProps>(
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
      <g opacity="0.9">
<path d="M17.625 12C17.625 14.767 15.6271 17.0674 12.9952 17.5372C12.4515 17.6343 12 17.1773 12 16.625V7.375C12 6.82272 12.4515 6.3657 12.9952 6.46277C15.6271 6.93265 17.625 9.23301 17.625 12Z" stroke={color} strokeWidth="2"/>
<path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={color} strokeWidth="2"/>
</g>
    </svg>
  )
);

ProgressIcon.displayName = 'ProgressIcon';

export { ProgressIcon };
export default ProgressIcon;
