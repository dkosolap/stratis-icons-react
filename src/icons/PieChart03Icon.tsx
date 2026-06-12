import * as React from 'react';

export interface PieChart03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PieChart03Icon = React.forwardRef<SVGSVGElement, PieChart03IconProps>(
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
      <path d="M12 2.3999C6.698 2.39987 2.3999 6.69798 2.3999 11.9999C2.3999 17.3019 6.69797 21.6 11.9999 21.6C17.3018 21.6 21.5999 17.3019 21.5999 11.9999C21.5999 6.69802 17.3019 2.39993 12 2.3999ZM21.5999 11.9999C21.5999 11.9999 21.5999 11.9999 21.5999 11.9999ZM21.5999 11.9999L11.9999 12M12 2.3999L11.9999 12M11.9999 12L5.3999 18.6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PieChart03Icon.displayName = 'PieChart03Icon';

export { PieChart03Icon };
export default PieChart03Icon;
