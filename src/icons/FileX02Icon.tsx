import * as React from 'react';

export interface FileX02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileX02Icon = React.forwardRef<SVGSVGElement, FileX02IconProps>(
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
      <path d="M10.7997 21.6H6.5997C5.27421 21.6 4.1997 20.5254 4.19971 19.2L4.1998 4.80001C4.19981 3.47453 5.27432 2.40002 6.5998 2.40002H17.4001C18.7256 2.40002 19.8001 3.47454 19.8001 4.80002V12.6M19.8001 21.6L17.4001 19.2M17.4001 19.2L15.0001 16.8M17.4001 19.2L15.0001 21.6M17.4001 19.2L19.8001 16.8M8.40008 7.20002H15.6001M8.40008 10.8H15.6001M8.40008 14.4H12.0001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileX02Icon.displayName = 'FileX02Icon';

export { FileX02Icon };
export default FileX02Icon;
