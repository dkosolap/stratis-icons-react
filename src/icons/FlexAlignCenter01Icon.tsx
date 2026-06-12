import * as React from 'react';

export interface FlexAlignCenter01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FlexAlignCenter01Icon = React.forwardRef<SVGSVGElement, FlexAlignCenter01IconProps>(
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
      <path d="M13.6875 16.5V7.5M10.3125 16.5V7.5M17.625 3L6.375 3C4.51104 3 3 4.51104 3 6.375L3 17.625C3 19.489 4.51104 21 6.375 21H17.625C19.489 21 21 19.489 21 17.625V6.375C21 4.51104 19.489 3 17.625 3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FlexAlignCenter01Icon.displayName = 'FlexAlignCenter01Icon';

export { FlexAlignCenter01Icon };
export default FlexAlignCenter01Icon;
