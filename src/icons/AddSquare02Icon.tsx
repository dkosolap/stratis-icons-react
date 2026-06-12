import * as React from 'react';

export interface AddSquare02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AddSquare02Icon = React.forwardRef<SVGSVGElement, AddSquare02IconProps>(
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
      <g opacity="0.9">
<path d="M15.375 11.9995H12M12 11.9995H8.625M12 11.9995V15.3745M12 11.9995L12 8.62445M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
</g>
    </svg>
  )
);

AddSquare02Icon.displayName = 'AddSquare02Icon';

export { AddSquare02Icon };
export default AddSquare02Icon;
