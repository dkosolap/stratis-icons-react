import * as React from 'react';

export interface File02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const File02Icon = React.forwardRef<SVGSVGElement, File02IconProps>(
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
      <path d="M8.40033 7.19999H15.6003M8.40033 10.8H15.6003M8.40033 14.4H12.0003M6.60004 2.39999H17.4003C18.7258 2.39999 19.8003 3.47454 19.8003 4.80004L19.8 19.2C19.8 20.5255 18.7254 21.6 17.4 21.6L6.59994 21.5999C5.27446 21.5999 4.19994 20.5254 4.19995 19.1999L4.20004 4.79998C4.20005 3.4745 5.27457 2.39999 6.60004 2.39999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

File02Icon.displayName = 'File02Icon';

export { File02Icon };
export default File02Icon;
