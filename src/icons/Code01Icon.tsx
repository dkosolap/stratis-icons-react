import * as React from 'react';

export interface Code01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Code01Icon = React.forwardRef<SVGSVGElement, Code01IconProps>(
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
      <path d="M9.5999 14.9999L6.5999 11.9999L9.5999 8.9999M14.3999 8.9999L17.3999 11.9999L14.3999 14.9999M4.7999 21.5999C3.47442 21.5999 2.3999 20.5254 2.3999 19.1999V4.7999C2.3999 3.47442 3.47442 2.3999 4.7999 2.3999H19.1999C20.5254 2.3999 21.5999 3.47442 21.5999 4.7999V19.1999C21.5999 20.5254 20.5254 21.5999 19.1999 21.5999H4.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Code01Icon.displayName = 'Code01Icon';

export { Code01Icon };
export default Code01Icon;
