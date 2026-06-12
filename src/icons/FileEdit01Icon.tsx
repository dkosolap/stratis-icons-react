import * as React from 'react';

export interface FileEdit01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FileEdit01Icon = React.forwardRef<SVGSVGElement, FileEdit01IconProps>(
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
      <path d="M9.55718 21.5574H4.75717C3.43168 21.5574 2.35717 20.4828 2.35718 19.1574L2.35727 4.75741C2.35728 3.43193 3.43179 2.35742 4.75727 2.35742H15.5575C16.883 2.35742 17.9575 3.43194 17.9575 4.75742V9.55742M13.1574 18.2484L18.2485 13.1573L21.6427 16.5514L16.5515 21.6426H13.1574V18.2484Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileEdit01Icon.displayName = 'FileEdit01Icon';

export { FileEdit01Icon };
export default FileEdit01Icon;
