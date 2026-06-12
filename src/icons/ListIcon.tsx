import * as React from 'react';

export interface ListIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ListIcon = React.forwardRef<SVGSVGElement, ListIconProps>(
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
      <path d="M8.7201 6H21.6001M8.7201 12.48H21.6001M8.7201 18.96H21.6001M3.6001 6V6.0128M3.6001 12.48V12.4928M3.6001 18.96V18.9728" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ListIcon.displayName = 'ListIcon';

export { ListIcon };
export default ListIcon;
