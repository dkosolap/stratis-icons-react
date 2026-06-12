import * as React from 'react';

export interface FilterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FilterIcon = React.forwardRef<SVGSVGElement, FilterIconProps>(
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
      <path d="M6.46154 12H17.5385M4 7H20M10.1538 17H13.8462" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FilterIcon.displayName = 'FilterIcon';

export { FilterIcon };
export default FilterIcon;
