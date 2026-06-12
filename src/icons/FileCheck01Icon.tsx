import * as React from 'react';

export interface FileCheck01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileCheck01Icon = React.forwardRef<SVGSVGElement, FileCheck01IconProps>(
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
      <path d="M9.89971 21.6H5.0997C3.77421 21.6 2.6997 20.5254 2.69971 19.2L2.6998 4.80001C2.69981 3.47453 3.77432 2.40002 5.0998 2.40002H15.9001C17.2255 2.40002 18.3001 3.47454 18.3001 4.80002V11.4M13.5001 18.2L15.7001 20.4L21.3001 14.4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileCheck01Icon.displayName = 'FileCheck01Icon';

export { FileCheck01Icon };
export default FileCheck01Icon;
