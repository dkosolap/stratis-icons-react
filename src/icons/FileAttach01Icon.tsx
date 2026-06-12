import * as React from 'react';

export interface FileAttach01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileAttach01Icon = React.forwardRef<SVGSVGElement, FileAttach01IconProps>(
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
      <path d="M11.6998 21.6H5.69979C4.37431 21.6 3.2998 20.5254 3.2998 19.2L3.2999 4.80001C3.29991 3.47453 4.37442 2.40002 5.6999 2.40002H16.5002C17.8256 2.40002 18.9002 3.47454 18.9002 4.80002V9.60002M7.50018 7.20002H14.7002M7.50018 10.8H14.7002M14.7002 15.554V18.4984C14.7002 19.9533 16.2516 21.2878 17.7065 21.2878C19.1615 21.2878 20.7002 19.9533 20.7002 18.4984V14.7791C20.7002 14.0089 20.2574 13.2272 19.2723 13.2272C18.2186 13.2272 17.7065 14.0089 17.7065 14.7791V18.3434M7.50018 14.4H11.1002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileAttach01Icon.displayName = 'FileAttach01Icon';

export { FileAttach01Icon };
export default FileAttach01Icon;
