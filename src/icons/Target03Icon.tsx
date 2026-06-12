import * as React from 'react';

export interface Target03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Target03Icon = React.forwardRef<SVGSVGElement, Target03IconProps>(
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
      <path d="M12 5.5V2M12 22V18.5M18.5 12H22M2 12H5.5M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Target03Icon.displayName = 'Target03Icon';

export { Target03Icon };
export default Target03Icon;
