import * as React from 'react';

export interface LayoutTopIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LayoutTopIcon = React.forwardRef<SVGSVGElement, LayoutTopIconProps>(
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
      <path d="M2.9999 8.9999H20.9999M5.9999 21.5999H17.9999C19.9881 21.5999 21.5999 19.9881 21.5999 17.9999V5.9999C21.5999 4.01168 19.9881 2.3999 17.9999 2.3999H5.9999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999V17.9999C2.3999 19.9881 4.01168 21.5999 5.9999 21.5999Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

LayoutTopIcon.displayName = 'LayoutTopIcon';

export { LayoutTopIcon };
export default LayoutTopIcon;
