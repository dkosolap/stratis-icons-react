import * as React from 'react';

export interface Scale03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Scale03Icon = React.forwardRef<SVGSVGElement, Scale03IconProps>(
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
      <path d="M13.5233 6.00039L17.9999 6.00039V10.8004M17.9999 6.00039L12.6666 11.3337M2.3999 13.2004H8.3999C9.72539 13.2004 10.7999 14.2749 10.7999 15.6004L10.7999 21.6004M19.4666 2.40039L4.53324 2.40039C3.35503 2.40039 2.3999 3.35552 2.3999 4.53372L2.3999 19.4671C2.3999 20.6453 3.35503 21.6004 4.53324 21.6004L19.4666 21.6004C20.6448 21.6004 21.5999 20.6453 21.5999 19.4671L21.5999 4.53372C21.5999 3.35552 20.6448 2.40039 19.4666 2.40039Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Scale03Icon.displayName = 'Scale03Icon';

export { Scale03Icon };
export default Scale03Icon;
