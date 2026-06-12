import * as React from 'react';

export interface FlexAlignRight01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FlexAlignRight01Icon = React.forwardRef<SVGSVGElement, FlexAlignRight01IconProps>(
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
      <path d="M16.5 16.5V7.5M13.125 16.5V7.5M17.625 3L6.375 3C4.51104 3 3 4.51104 3 6.375L3 17.625C3 19.489 4.51104 21 6.375 21H17.625C19.489 21 21 19.489 21 17.625V6.375C21 4.51104 19.489 3 17.625 3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FlexAlignRight01Icon.displayName = 'FlexAlignRight01Icon';

export { FlexAlignRight01Icon };
export default FlexAlignRight01Icon;
