import * as React from 'react';

export interface Lightning01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Lightning01Icon = React.forwardRef<SVGSVGElement, Lightning01IconProps>(
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
      <path d="M10.2222 14.4889L9.51105 21.6L18.7555 11.6445L13.7777 8.80002L14.4888 2.40002L5.24438 12.3556L10.2222 14.4889Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Lightning01Icon.displayName = 'Lightning01Icon';

export { Lightning01Icon };
export default Lightning01Icon;
