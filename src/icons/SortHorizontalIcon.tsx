import * as React from 'react';

export interface SortHorizontalIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const SortHorizontalIcon = React.forwardRef<SVGSVGElement, SortHorizontalIconProps>(
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
      <path d="M8.40005 15.5999L4.80005 11.9999L8.40005 8.3999M15.6 8.3999L19.2 11.9999L15.6 15.5999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

SortHorizontalIcon.displayName = 'SortHorizontalIcon';

export { SortHorizontalIcon };
export default SortHorizontalIcon;
