import * as React from 'react';

export interface FlexAlignTop01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FlexAlignTop01Icon = React.forwardRef<SVGSVGElement, FlexAlignTop01IconProps>(
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
      <path d="M16.5 7.5L7.5 7.5M16.5 10.875L7.5 10.875M3 6.375L3 17.625C3 19.489 4.51104 21 6.375 21H17.625C19.489 21 21 19.489 21 17.625V6.375C21 4.51104 19.489 3 17.625 3L6.375 3C4.51104 3 3 4.51104 3 6.375Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FlexAlignTop01Icon.displayName = 'FlexAlignTop01Icon';

export { FlexAlignTop01Icon };
export default FlexAlignTop01Icon;
