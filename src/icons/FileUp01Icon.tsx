import * as React from 'react';

export interface FileUp01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileUp01Icon = React.forwardRef<SVGSVGElement, FileUp01IconProps>(
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
      <path d="M10.7999 21.6H5.99984C4.67436 21.6 3.59984 20.5254 3.59985 19.2L3.59995 4.80001C3.59995 3.47453 4.67447 2.40002 5.99995 2.40002H16.8002C18.1257 2.40002 19.2002 3.47454 19.2002 4.80002V11.4M20.4002 17.9322L18.0545 15.6L15.6002 18.0426M18.0545 15.6V21.6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileUp01Icon.displayName = 'FileUp01Icon';

export { FileUp01Icon };
export default FileUp01Icon;
