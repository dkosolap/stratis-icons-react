import * as React from 'react';

export interface Volume07IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Volume07Icon = React.forwardRef<SVGSVGElement, Volume07IconProps>(
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
      <path d="M16.8827 8.5V4L12.2315 8.65121L5.5 8.65121V15.3481H9.54584M16.8827 13V20L13 16.1173M6 18.5L9.54584 15.3481M19.5 6.5L9.54584 15.3481" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Volume07Icon.displayName = 'Volume07Icon';

export { Volume07Icon };
export default Volume07Icon;
