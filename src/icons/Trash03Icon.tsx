import * as React from 'react';

export interface Trash03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Trash03Icon = React.forwardRef<SVGSVGElement, Trash03IconProps>(
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
      <path d="M4 6.17647H20M9 3H15M15.5 21H8.5C7.39543 21 6.5 20.0519 6.5 18.8824L6.0434 7.27937C6.01973 6.67783 6.47392 6.17647 7.04253 6.17647H16.9575C17.5261 6.17647 17.9803 6.67783 17.9566 7.27937L17.5 18.8824C17.5 20.0519 16.6046 21 15.5 21Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Trash03Icon.displayName = 'Trash03Icon';

export { Trash03Icon };
export default Trash03Icon;
