import * as React from 'react';

export interface AlignVerticalCenter03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignVerticalCenter03Icon = React.forwardRef<SVGSVGElement, AlignVerticalCenter03IconProps>(
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
      <path d="M11.9998 21.5999V2.3999M5.11997 9.16354L2.3999 11.7817L5.11997 14.3999M2.3999 11.7817H9.11458M18.8798 14.3999L21.5999 11.7817L18.8798 9.16354M21.5999 11.7817L14.8852 11.7817" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignVerticalCenter03Icon.displayName = 'AlignVerticalCenter03Icon';

export { AlignVerticalCenter03Icon };
export default AlignVerticalCenter03Icon;
