import * as React from 'react';

export interface AlignHorizontalCenter01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignHorizontalCenter01Icon = React.forwardRef<SVGSVGElement, AlignHorizontalCenter01IconProps>(
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
      <path d="M2.3999 11.9996L21.5999 11.9996M9.38172 6.39452L11.9999 9.11458L14.6181 6.39451M11.9999 9.11458V2.3999M14.6181 17.6053L11.9999 14.8852L9.38172 17.6053M11.9999 14.8852V21.5999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignHorizontalCenter01Icon.displayName = 'AlignHorizontalCenter01Icon';

export { AlignHorizontalCenter01Icon };
export default AlignHorizontalCenter01Icon;
