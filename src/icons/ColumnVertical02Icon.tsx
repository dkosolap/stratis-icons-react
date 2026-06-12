import * as React from 'react';

export interface ColumnVertical02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ColumnVertical02Icon = React.forwardRef<SVGSVGElement, ColumnVertical02IconProps>(
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
      <path d="M12 3L19.0274 3C20.1168 3 21 3.88316 21 4.9726V19.0274C21 20.1168 20.1168 21 19.0274 21H12M12 3L4.9726 3C3.88316 3 3 3.88316 3 4.9726L3 19.0274C3 20.1168 3.88317 21 4.9726 21H12M12 3V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ColumnVertical02Icon.displayName = 'ColumnVertical02Icon';

export { ColumnVertical02Icon };
export default ColumnVertical02Icon;
