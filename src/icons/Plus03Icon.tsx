import * as React from 'react';

export interface Plus03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Plus03Icon = React.forwardRef<SVGSVGElement, Plus03IconProps>(
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
      <path d="M12 7.2002L12 16.8002M16.8 12.0002L7.19995 12.0002" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Plus03Icon.displayName = 'Plus03Icon';

export { Plus03Icon };
export default Plus03Icon;
