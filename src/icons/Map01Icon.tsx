import * as React from 'react';

export interface Map01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Map01Icon = React.forwardRef<SVGSVGElement, Map01IconProps>(
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
      <path d="M4.125 4.6875L19.4118 19.9412M11.4706 13.0588L4.58824 19.9412M6.17647 21H17.8235C19.5778 21 21 19.5778 21 17.8235V6.17647C21 4.42215 19.5778 3 17.8235 3H6.17647C4.42215 3 3 4.42215 3 6.17647V17.8235C3 19.5778 4.42215 21 6.17647 21Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Map01Icon.displayName = 'Map01Icon';

export { Map01Icon };
export default Map01Icon;
