import * as React from 'react';

export interface Lightning02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Lightning02Icon = React.forwardRef<SVGSVGElement, Lightning02IconProps>(
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
      <path d="M13.2799 2.40002L3.67993 13.92H11.9999L11.3599 21.6L20.3199 10.08H11.9999L13.2799 3.04002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Lightning02Icon.displayName = 'Lightning02Icon';

export { Lightning02Icon };
export default Lightning02Icon;
