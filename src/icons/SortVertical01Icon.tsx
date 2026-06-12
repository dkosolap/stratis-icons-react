import * as React from 'react';

export interface SortVertical01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const SortVertical01Icon = React.forwardRef<SVGSVGElement, SortVertical01IconProps>(
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
      <path d="M15.5999 15.5998L11.9999 19.1998L8.3999 15.5998M8.3999 8.3998L11.9999 4.7998L15.5999 8.3998" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

SortVertical01Icon.displayName = 'SortVertical01Icon';

export { SortVertical01Icon };
export default SortVertical01Icon;
