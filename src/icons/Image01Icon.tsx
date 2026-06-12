import * as React from 'react';

export interface Image01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Image01Icon = React.forwardRef<SVGSVGElement, Image01IconProps>(
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
      <path d="M8.1599 15.6L11.9999 12L14.5599 13.8L18.1866 10.2L21.3866 13.2M2.3999 9V19.8H15.1999M10.0799 7.8V7.70977M21.5999 15.2V5.2C21.5999 4.64772 21.1522 4.2 20.5999 4.2H7.2399C6.68762 4.2 6.2399 4.64772 6.2399 5.2V15.2C6.2399 15.7523 6.68762 16.2 7.2399 16.2H20.5999C21.1522 16.2 21.5999 15.7523 21.5999 15.2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Image01Icon.displayName = 'Image01Icon';

export { Image01Icon };
export default Image01Icon;
