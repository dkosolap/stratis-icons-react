import * as React from 'react';

export interface Flame01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Flame01Icon = React.forwardRef<SVGSVGElement, Flame01IconProps>(
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
      <path d="M12.0001 21.6C8.03005 21.6 4.80005 18.5579 4.80005 14.8187C4.80005 9.60002 12.0002 2.40002 12.0002 2.40002C12.0002 2.40002 19.2 9.60002 19.2 14.8187C19.2 18.558 15.9702 21.6 12.0001 21.6ZM12.0001 21.6C10.0151 21.6 8.40005 20.079 8.40005 18.2094C8.40005 15.6 12.0001 12 12.0001 12C12.0001 12 15.6 15.6 15.6 18.2094C15.6 20.079 13.9851 21.6 12.0001 21.6Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Flame01Icon.displayName = 'Flame01Icon';

export { Flame01Icon };
export default Flame01Icon;
