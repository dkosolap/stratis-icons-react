import * as React from 'react';

export interface FileEye02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileEye02Icon = React.forwardRef<SVGSVGElement, FileEye02IconProps>(
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
      <path d="M10.7999 21.6H4.79989C3.47441 21.6 2.39989 20.5254 2.3999 19.2L2.4 4.80001C2.4 3.47453 3.47452 2.40002 4.79999 2.40002H15.6003C16.9257 2.40002 18.0003 3.47454 18.0003 4.80002V9.60002M17.3999 17.349V17.2858M6.60028 7.20002H13.8003M6.60028 10.8H13.8003M6.60028 14.4H10.2003M21.5999 17.4C21.5999 17.4 20.6037 20.3397 17.3999 20.2883C14.1961 20.237 13.1999 17.4 13.1999 17.4C13.1999 17.4 14.1557 14.409 17.3999 14.409C20.6441 14.409 21.5999 17.4 21.5999 17.4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileEye02Icon.displayName = 'FileEye02Icon';

export { FileEye02Icon };
export default FileEye02Icon;
