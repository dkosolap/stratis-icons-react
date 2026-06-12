import * as React from 'react';

export interface Eraser02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Eraser02Icon = React.forwardRef<SVGSVGElement, Eraser02IconProps>(
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
      <path d="M3.6001 21.6004H21.2001M11.3351 18.1705H7.91004L3.89237 14.1529C3.7053 13.9647 3.6003 13.7101 3.6003 13.4447C3.6003 13.1794 3.7053 12.9248 3.89237 12.7366L13.9365 2.69247C14.1247 2.50539 14.3793 2.40039 14.6447 2.40039C14.91 2.40039 15.1646 2.50539 15.3528 2.69247L20.3748 7.71455C20.5619 7.90274 20.6669 8.15731 20.6669 8.42266C20.6669 8.68802 20.5619 8.94259 20.3748 9.13078L11.3351 18.1705Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Eraser02Icon.displayName = 'Eraser02Icon';

export { Eraser02Icon };
export default Eraser02Icon;
