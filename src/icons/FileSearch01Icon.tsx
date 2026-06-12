import * as React from 'react';

export interface FileSearch01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileSearch01Icon = React.forwardRef<SVGSVGElement, FileSearch01IconProps>(
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
      <path d="M11.6998 21.6H5.69979C4.37431 21.6 3.2998 20.5254 3.2998 19.2L3.2999 4.80001C3.29991 3.47453 4.37442 2.40002 5.6999 2.40002H16.5002C17.8256 2.40002 18.9002 3.47454 18.9002 4.80002V9.60002M19.5002 18.6L20.7002 19.8M20.1002 16.2C20.1002 17.8569 18.757 19.2 17.1002 19.2C15.4433 19.2 14.1002 17.8569 14.1002 16.2C14.1002 14.5432 15.4433 13.2 17.1002 13.2C18.757 13.2 20.1002 14.5432 20.1002 16.2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileSearch01Icon.displayName = 'FileSearch01Icon';

export { FileSearch01Icon };
export default FileSearch01Icon;
