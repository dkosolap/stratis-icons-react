import * as React from 'react';

export interface Calculator021IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Calculator021Icon = React.forwardRef<SVGSVGElement, Calculator021IconProps>(
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
      <path d="M6.375 17.625L17.625 6.375M8.25 10.75V8.25M8.25 8.25V5.75M8.25 8.25H5.75M8.25 8.25H10.75M13.25 16.375H18.25M4.7027 22H19.2973C20.79 22 22 20.79 22 19.2973V4.7027C22 3.21004 20.79 2 19.2973 2H4.7027C3.21004 2 2 3.21004 2 4.7027V19.2973C2 20.79 3.21004 22 4.7027 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Calculator021Icon.displayName = 'Calculator021Icon';

export { Calculator021Icon };
export default Calculator021Icon;
