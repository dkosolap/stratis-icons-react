import * as React from 'react';

export interface ArrowRotateRight01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ArrowRotateRight01Icon = React.forwardRef<SVGSVGElement, ArrowRotateRight01IconProps>(
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
      <path d="M19.1288 14.5C18.1109 17.6939 15.1954 20 11.7576 20C7.47318 20 4 16.4183 4 12C4 7.58172 7.47318 4 11.7576 4C14.629 4 17.136 5.60879 18.4773 8M16.1212 9H20V5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ArrowRotateRight01Icon.displayName = 'ArrowRotateRight01Icon';

export { ArrowRotateRight01Icon };
export default ArrowRotateRight01Icon;
