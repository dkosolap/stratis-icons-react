import * as React from 'react';

export interface AlignCenterIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignCenterIcon = React.forwardRef<SVGSVGElement, AlignCenterIconProps>(
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
      <path d="M21.5999 19.7998H2.3999M19.7999 14.5998H5.67577M21.5999 9.3998H2.3999M17.3999 4.7998L7.13783 4.7998" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignCenterIcon.displayName = 'AlignCenterIcon';

export { AlignCenterIcon };
export default AlignCenterIcon;
