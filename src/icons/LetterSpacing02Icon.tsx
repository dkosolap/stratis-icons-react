import * as React from 'react';

export interface LetterSpacing02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const LetterSpacing02Icon = React.forwardRef<SVGSVGElement, LetterSpacing02IconProps>(
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
      <path d="M21.5999 2.40039V21.6004M2.3999 21.6004V2.40039M7.62846 16.8004L11.9999 6.60042L14.706 12.9147M14.706 12.9147L16.3713 16.8004M14.706 12.9147H9.57132" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

LetterSpacing02Icon.displayName = 'LetterSpacing02Icon';

export { LetterSpacing02Icon };
export default LetterSpacing02Icon;
