import * as React from 'react';

export interface AlignDown01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignDown01Icon = React.forwardRef<SVGSVGElement, AlignDown01IconProps>(
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
      <path d="M2.3999 21.5999L21.5999 21.5999M7.7999 4.7999L7.7999 14.3999C7.7999 15.7254 8.87442 16.7999 10.1999 16.7999H13.7999C15.1254 16.7999 16.1999 15.7254 16.1999 14.3999L16.1999 4.7999C16.1999 3.47442 15.1254 2.3999 13.7999 2.3999L10.1999 2.3999C8.87442 2.3999 7.79991 3.47442 7.7999 4.7999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignDown01Icon.displayName = 'AlignDown01Icon';

export { AlignDown01Icon };
export default AlignDown01Icon;
