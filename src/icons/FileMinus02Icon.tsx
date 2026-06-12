import * as React from 'react';

export interface FileMinus02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileMinus02Icon = React.forwardRef<SVGSVGElement, FileMinus02IconProps>(
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
      <path d="M11.6058 21.6H5.6058C4.28031 21.6 3.2058 20.5254 3.20581 19.2L3.2059 4.80001C3.20591 3.47453 4.28043 2.40002 5.6059 2.40002H16.4062C17.7317 2.40002 18.8062 3.47454 18.8062 4.80002V13.2M14.0058 17.7941H20.794M7.40619 7.20002H14.6062M7.40619 10.8H14.6062M7.40619 14.4H11.0062" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileMinus02Icon.displayName = 'FileMinus02Icon';

export { FileMinus02Icon };
export default FileMinus02Icon;
