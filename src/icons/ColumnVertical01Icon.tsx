import * as React from 'react';

export interface ColumnVertical01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ColumnVertical01Icon = React.forwardRef<SVGSVGElement, ColumnVertical01IconProps>(
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
      <path d="M19 3C20.1046 3 21 3.88316 21 4.9726L21 19.0274C21 20.1168 20.1046 21 19 21H16C14.8954 21 14 20.1168 14 19.0274L14 4.9726C14 3.88316 14.8954 3 16 3L19 3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 3C3.89543 3 3 3.88316 3 4.9726L3 19.0274C3 20.1168 3.89543 21 5 21H8C9.10457 21 10 20.1168 10 19.0274L10 4.9726C10 3.88316 9.10457 3 8 3L5 3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ColumnVertical01Icon.displayName = 'ColumnVertical01Icon';

export { ColumnVertical01Icon };
export default ColumnVertical01Icon;
