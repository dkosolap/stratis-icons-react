import * as React from 'react';

export interface FolderDown02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FolderDown02Icon = React.forwardRef<SVGSVGElement, FolderDown02IconProps>(
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
      <path d="M14.026 19.7118L4.77382 19.7118C3.44833 19.7118 2.37381 18.6373 2.37383 17.3118L2.37392 8.18749C2.37392 7.27356 2.37358 5.97183 2.37329 5.02928C2.37309 4.36636 2.91042 3.82959 3.57334 3.82959H9.29155L12.0566 6.78323H20.3729C21.0356 6.78323 21.5729 7.32049 21.5729 7.98323V11.1708M16.8268 17.8384L19.1725 20.1705L21.6268 17.728M19.1725 20.1705V14.1705" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FolderDown02Icon.displayName = 'FolderDown02Icon';

export { FolderDown02Icon };
export default FolderDown02Icon;
