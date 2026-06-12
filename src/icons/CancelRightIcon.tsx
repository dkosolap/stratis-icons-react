import * as React from 'react';

export interface CancelRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const CancelRightIcon = React.forwardRef<SVGSVGElement, CancelRightIconProps>(
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
<path d="M8.625 15.375L15.375 8.625M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
</g>
    </svg>
  )
);

CancelRightIcon.displayName = 'CancelRightIcon';

export { CancelRightIcon };
export default CancelRightIcon;
