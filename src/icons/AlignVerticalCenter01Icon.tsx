import * as React from 'react';

export interface AlignVerticalCenter01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignVerticalCenter01Icon = React.forwardRef<SVGSVGElement, AlignVerticalCenter01IconProps>(
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
      <path d="M11.9996 21.5999L11.9996 2.3999M6.39452 14.6181L9.11458 11.9999L6.39451 9.38172M9.11458 11.9999H2.3999M17.6053 9.38172L14.8852 11.9999L17.6053 14.6181M14.8852 11.9999L21.5999 11.9999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignVerticalCenter01Icon.displayName = 'AlignVerticalCenter01Icon';

export { AlignVerticalCenter01Icon };
export default AlignVerticalCenter01Icon;
