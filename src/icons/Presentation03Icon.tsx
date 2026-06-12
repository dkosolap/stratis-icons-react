import * as React from 'react';

export interface Presentation03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Presentation03Icon = React.forwardRef<SVGSVGElement, Presentation03IconProps>(
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
      <path d="M9.5999 16.2L7.7999 21M16.5935 20.9333L14.4722 16.2664M14.3999 8.93216L12.0542 6.6L9.5999 9.04258M12.0542 6.6V12.6M4.7999 16.2C3.47442 16.2 2.3999 15.1255 2.3999 13.8V5.4C2.3999 4.07452 3.47442 3 4.7999 3H19.1999C20.5254 3 21.5999 4.07452 21.5999 5.4V13.8C21.5999 15.1255 20.5254 16.2 19.1999 16.2H4.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Presentation03Icon.displayName = 'Presentation03Icon';

export { Presentation03Icon };
export default Presentation03Icon;
