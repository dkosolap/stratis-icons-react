import * as React from 'react';

export interface FileReturn01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileReturn01Icon = React.forwardRef<SVGSVGElement, FileReturn01IconProps>(
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
      <path d="M9.8998 21.6H5.69979C4.37431 21.6 3.2998 20.5254 3.2998 19.2L3.2999 4.80001C3.29991 3.47453 4.37442 2.40002 5.6999 2.40002H16.5002C17.8256 2.40002 18.9002 3.47454 18.9002 4.80002V10.2M14.0323 15.6L11.7002 17.9458L14.1428 20.4M11.7002 17.9458H18.9273C19.9064 17.9458 20.7002 17.152 20.7002 16.1729C20.7002 15.1938 19.9064 14.4 18.9273 14.4H16.5002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileReturn01Icon.displayName = 'FileReturn01Icon';

export { FileReturn01Icon };
export default FileReturn01Icon;
