import * as React from 'react';

export interface AlignRight01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignRight01Icon = React.forwardRef<SVGSVGElement, AlignRight01IconProps>(
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
      <path d="M21.5999 21.5999L21.5999 2.3999M4.7999 16.1999L14.3999 16.1999C15.7254 16.1999 16.7999 15.1254 16.7999 13.7999V10.1999C16.7999 8.87442 15.7254 7.7999 14.3999 7.7999L4.7999 7.7999C3.47442 7.7999 2.3999 8.87441 2.3999 10.1999L2.3999 13.7999C2.3999 15.1254 3.47442 16.1999 4.7999 16.1999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignRight01Icon.displayName = 'AlignRight01Icon';

export { AlignRight01Icon };
export default AlignRight01Icon;
