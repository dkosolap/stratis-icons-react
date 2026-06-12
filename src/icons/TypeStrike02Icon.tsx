import * as React from 'react';

export interface TypeStrike02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TypeStrike02Icon = React.forwardRef<SVGSVGElement, TypeStrike02IconProps>(
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
      <path d="M6.38008 16.5C6.90524 19.0676 9.19211 21 11.9336 21H14.7084C17.212 21 19.2417 18.9853 19.2417 16.5C19.2417 14.0147 17.2125 12 14.7088 12L10.7996 12H4M14.7088 12L21 12M19.2414 8.625C19.2414 5.5184 16.7043 3 13.5747 3H10.8C8.29631 3 6.26667 5.01472 6.26667 7.5V8.625" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TypeStrike02Icon.displayName = 'TypeStrike02Icon';

export { TypeStrike02Icon };
export default TypeStrike02Icon;
