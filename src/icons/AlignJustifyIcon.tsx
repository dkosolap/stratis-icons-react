import * as React from 'react';

export interface AlignJustifyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignJustifyIcon = React.forwardRef<SVGSVGElement, AlignJustifyIconProps>(
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
      <path d="M2.4001 3.59961L21.6001 3.59961M2.4001 8.79961L21.6001 8.79961M2.4001 13.9996L21.6001 13.9996M2.4001 19.1996L21.6001 19.1996" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignJustifyIcon.displayName = 'AlignJustifyIcon';

export { AlignJustifyIcon };
export default AlignJustifyIcon;
