import * as React from 'react';

export interface PentagonIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PentagonIcon = React.forwardRef<SVGSVGElement, PentagonIconProps>(
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
      <path d="M11.9999 3L21.5999 9.87539L17.933 21H6.06678L2.3999 9.87539L11.9999 3Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

PentagonIcon.displayName = 'PentagonIcon';

export { PentagonIcon };
export default PentagonIcon;
