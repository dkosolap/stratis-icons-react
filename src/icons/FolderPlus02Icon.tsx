import * as React from 'react';

export interface FolderPlus02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FolderPlus02Icon = React.forwardRef<SVGSVGElement, FolderPlus02IconProps>(
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
      <path d="M12.1027 19.5147H4.30361C2.97812 19.5147 1.9036 18.4401 1.90361 17.1146L1.9037 7.99034C1.90371 7.07642 1.90337 5.77469 1.90308 4.83214C1.90287 4.16922 2.44021 3.63245 3.10312 3.63245H8.82134L11.5864 6.58608H19.9027C20.5654 6.58608 21.1027 7.12334 21.1027 7.78608V10.9737M18.7027 20.3675L18.7027 16.9734M18.7027 16.9734L18.7027 13.5793M18.7027 16.9734L15.3086 16.9734M18.7027 16.9734L22.0968 16.9734" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FolderPlus02Icon.displayName = 'FolderPlus02Icon';

export { FolderPlus02Icon };
export default FolderPlus02Icon;
