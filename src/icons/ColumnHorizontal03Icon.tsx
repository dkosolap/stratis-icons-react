import * as React from 'react';

export interface ColumnHorizontal03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ColumnHorizontal03Icon = React.forwardRef<SVGSVGElement, ColumnHorizontal03IconProps>(
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
      <path d="M3.46189 15.0205H21M3.46189 9.01018H21M18.7805 21H4.94222C3.86956 21 3 20.1168 3 19.0274L3 4.9726C3 3.88316 3.86956 3 4.94222 3L18.7805 3C19.8532 3 20.7227 3.88316 20.7227 4.9726V19.0274C20.7227 20.1168 19.8532 21 18.7805 21Z" stroke={color} strokeWidth="2"/>
    </svg>
  )
);

ColumnHorizontal03Icon.displayName = 'ColumnHorizontal03Icon';

export { ColumnHorizontal03Icon };
export default ColumnHorizontal03Icon;
