import * as React from 'react';

export interface FileMinus01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileMinus01Icon = React.forwardRef<SVGSVGElement, FileMinus01IconProps>(
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
      <path d="M11.6058 21.6H5.6058C4.28031 21.6 3.2058 20.5254 3.20581 19.2L3.2059 4.80001C3.20591 3.47453 4.28043 2.40002 5.6059 2.40002H16.4062C17.7317 2.40002 18.8062 3.47454 18.8062 4.80002V13.2M14.0058 17.7941H20.794" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileMinus01Icon.displayName = 'FileMinus01Icon';

export { FileMinus01Icon };
export default FileMinus01Icon;
