import * as React from 'react';

export interface FlexAlignBottom01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FlexAlignBottom01Icon = React.forwardRef<SVGSVGElement, FlexAlignBottom01IconProps>(
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
      <path d="M7.5 16.5H16.5M7.5 13.125H16.5M21 17.625V6.375C21 4.51104 19.489 3 17.625 3L6.375 3C4.51104 3 3 4.51104 3 6.375L3 17.625C3 19.489 4.51104 21 6.375 21H17.625C19.489 21 21 19.489 21 17.625Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FlexAlignBottom01Icon.displayName = 'FlexAlignBottom01Icon';

export { FlexAlignBottom01Icon };
export default FlexAlignBottom01Icon;
