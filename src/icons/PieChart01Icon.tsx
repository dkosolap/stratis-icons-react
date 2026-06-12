import * as React from 'react';

export interface PieChart01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PieChart01Icon = React.forwardRef<SVGSVGElement, PieChart01IconProps>(
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
      <path d="M12 2.3999C17.3019 2.39993 21.5999 6.69802 21.5999 11.9999C21.5999 17.3019 17.3018 21.6 11.9999 21.6C6.69797 21.6 2.3999 17.3019 2.3999 11.9999C2.3999 6.69798 6.698 2.39987 12 2.3999ZM5.3999 18.6L11.9999 12L12 2.3999M11.9999 12L5.3999 5.39996" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PieChart01Icon.displayName = 'PieChart01Icon';

export { PieChart01Icon };
export default PieChart01Icon;
