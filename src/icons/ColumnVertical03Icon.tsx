import * as React from 'react';

export interface ColumnVertical03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ColumnVertical03Icon = React.forwardRef<SVGSVGElement, ColumnVertical03IconProps>(
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
      <path d="M9.10238 21H4.9726C3.88317 21 3 20.1168 3 19.0274L3 4.9726C3 3.88316 3.88316 3 4.9726 3L9.10238 3L19.0274 3C20.1168 3 21 3.88316 21 4.9726V19.0274C21 20.1168 20.1168 21 19.0274 21H9.10238ZM9.10238 3V21M15.1127 3V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ColumnVertical03Icon.displayName = 'ColumnVertical03Icon';

export { ColumnVertical03Icon };
export default ColumnVertical03Icon;
