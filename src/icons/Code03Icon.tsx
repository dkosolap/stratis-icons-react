import * as React from 'react';

export interface Code03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Code03Icon = React.forwardRef<SVGSVGElement, Code03IconProps>(
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
      <path d="M7.1999 16.8002L2.3999 12.0002L7.1999 7.2002M16.7999 7.2002L21.5999 12.0002L16.7999 16.8002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Code03Icon.displayName = 'Code03Icon';

export { Code03Icon };
export default Code03Icon;
