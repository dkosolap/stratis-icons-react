import * as React from 'react';

export interface FileCheck02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileCheck02Icon = React.forwardRef<SVGSVGElement, FileCheck02IconProps>(
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
      <path d="M10.2999 21.6H5.49984C4.17436 21.6 3.09984 20.5254 3.09985 19.2L3.09995 4.80001C3.09995 3.47453 4.17447 2.40002 5.49995 2.40002H16.3002C17.6257 2.40002 18.7002 3.47454 18.7002 4.80002V11.4M13.9002 18.2L16.1002 20.4L20.9002 15.5998M7.30023 7.20002H14.5002M7.30023 10.8H14.5002M7.30023 14.4H10.9002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileCheck02Icon.displayName = 'FileCheck02Icon';

export { FileCheck02Icon };
export default FileCheck02Icon;
