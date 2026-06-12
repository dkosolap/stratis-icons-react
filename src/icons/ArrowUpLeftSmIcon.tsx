import * as React from 'react';

export interface ArrowUpLeftSmIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowUpLeftSmIcon = React.forwardRef<SVGSVGElement, ArrowUpLeftSmIconProps>(
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
      <path d="M14.7765 8L8.09412 8.09412L8 14.7765M8.09412 8.09412L16 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowUpLeftSmIcon.displayName = 'ArrowUpLeftSmIcon';

export { ArrowUpLeftSmIcon };
export default ArrowUpLeftSmIcon;
