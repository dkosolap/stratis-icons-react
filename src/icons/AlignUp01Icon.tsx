import * as React from 'react';

export interface AlignUp01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignUp01Icon = React.forwardRef<SVGSVGElement, AlignUp01IconProps>(
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
      <path d="M21.5999 2.3999L2.3999 2.3999M16.1999 19.1999V9.5999C16.1999 8.27442 15.1254 7.1999 13.7999 7.1999L10.1999 7.1999C8.87442 7.1999 7.7999 8.27442 7.7999 9.5999L7.7999 19.1999C7.7999 20.5254 8.87442 21.5999 10.1999 21.5999L13.7999 21.5999C15.1254 21.5999 16.1999 20.5254 16.1999 19.1999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignUp01Icon.displayName = 'AlignUp01Icon';

export { AlignUp01Icon };
export default AlignUp01Icon;
