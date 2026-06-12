import * as React from 'react';

export interface AlignRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignRightIcon = React.forwardRef<SVGSVGElement, AlignRightIconProps>(
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
      <path d="M21.5999 19.1996H2.3999M21.5999 13.9996H7.47576M21.5999 8.79961H2.3999M21.5999 3.59961L11.3378 3.59961" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignRightIcon.displayName = 'AlignRightIcon';

export { AlignRightIcon };
export default AlignRightIcon;
