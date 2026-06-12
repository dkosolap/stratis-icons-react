import * as React from 'react';

export interface IndentLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const IndentLeftIcon = React.forwardRef<SVGSVGElement, IndentLeftIconProps>(
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
      <path d="M2.39988 3.59961L21.5999 3.59961M11.9999 8.79961L21.5999 8.79961M11.9999 13.9996L21.5999 13.9996M2.39988 19.1996H21.5999M2.39988 14.3996L2.39941 8.39961L7.19988 11.3996L2.39988 14.3996Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

IndentLeftIcon.displayName = 'IndentLeftIcon';

export { IndentLeftIcon };
export default IndentLeftIcon;
