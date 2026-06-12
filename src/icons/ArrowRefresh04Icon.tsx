import * as React from 'react';

export interface ArrowRefresh04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowRefresh04Icon = React.forwardRef<SVGSVGElement, ArrowRefresh04IconProps>(
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
      <path d="M8 19.3688C5.60879 17.9836 4 15.3947 4 12.4295C4 9.06753 6.06817 6.18926 9 5.00086M9 16.9357L9 20.9412H5M16 5.57241C18.3912 6.95755 20 9.54647 20 12.5117C20 15.8736 17.9318 18.7519 15 19.9403M15 8.00549V4L19 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRefresh04Icon.displayName = 'ArrowRefresh04Icon';

export { ArrowRefresh04Icon };
export default ArrowRefresh04Icon;
