import * as React from 'react';

export interface AlignLeft01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignLeft01Icon = React.forwardRef<SVGSVGElement, AlignLeft01IconProps>(
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
      <path d="M2.3999 2.3999V21.5999M19.1999 7.7999L9.5999 7.7999C8.27442 7.7999 7.1999 8.87442 7.1999 10.1999V13.7999C7.1999 15.1254 8.27442 16.1999 9.5999 16.1999L19.1999 16.1999C20.5254 16.1999 21.5999 15.1254 21.5999 13.7999V10.1999C21.5999 8.87442 20.5254 7.7999 19.1999 7.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignLeft01Icon.displayName = 'AlignLeft01Icon';

export { AlignLeft01Icon };
export default AlignLeft01Icon;
