import * as React from 'react';

export interface FileSearch02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileSearch02Icon = React.forwardRef<SVGSVGElement, FileSearch02IconProps>(
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
      <path d="M11.4 21.6H5.39999C4.0745 21.6 2.99999 20.5254 3 19.2L3.00009 4.80001C3.0001 3.47453 4.07462 2.40002 5.40009 2.40002H16.2004C17.5258 2.40002 18.6004 3.47454 18.6004 4.80002V9.60002M19.8 19.8L21 21M7.20037 7.20002H14.4004M7.20037 10.8H14.4004M7.20037 14.4H10.8004M20.4 17.4C20.4 19.0569 19.0569 20.4 17.4 20.4C15.7431 20.4 14.4 19.0569 14.4 17.4C14.4 15.7432 15.7431 14.4 17.4 14.4C19.0569 14.4 20.4 15.7432 20.4 17.4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileSearch02Icon.displayName = 'FileSearch02Icon';

export { FileSearch02Icon };
export default FileSearch02Icon;
