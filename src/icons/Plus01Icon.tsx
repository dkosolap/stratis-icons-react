import * as React from 'react';

export interface Plus01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Plus01Icon = React.forwardRef<SVGSVGElement, Plus01IconProps>(
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
      <path d="M12.0001 4.7998L12 19.1998M19.2 11.9998L4.80005 11.9998" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Plus01Icon.displayName = 'Plus01Icon';

export { Plus01Icon };
export default Plus01Icon;
