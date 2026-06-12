import * as React from 'react';

export interface LayoutRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LayoutRightIcon = React.forwardRef<SVGSVGElement, LayoutRightIconProps>(
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
      <path d="M14.9999 2.9999L14.9999 20.9999M2.3999 5.9999L2.3999 17.9999C2.3999 19.9881 4.01168 21.5999 5.9999 21.5999H17.9999C19.9881 21.5999 21.5999 19.9881 21.5999 17.9999V5.9999C21.5999 4.01168 19.9881 2.3999 17.9999 2.3999L5.9999 2.3999C4.01168 2.3999 2.3999 4.01168 2.3999 5.9999Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

LayoutRightIcon.displayName = 'LayoutRightIcon';

export { LayoutRightIcon };
export default LayoutRightIcon;
