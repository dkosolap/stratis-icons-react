import * as React from 'react';

export interface BarGroup03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BarGroup03Icon = React.forwardRef<SVGSVGElement, BarGroup03IconProps>(
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
      <path d="M14.9435 21.0881V3.91211C14.9435 3.35982 14.4958 2.91211 13.9435 2.91211H9.88528C9.333 2.91211 8.88528 3.35982 8.88528 3.91211V21.0881M14.9435 21.0881L14.9419 10.7683C14.9418 10.2159 15.3896 9.76811 15.9419 9.76811H20C20.5523 9.76811 21 10.2158 21 10.7681V20.0881C21 20.6404 20.5523 21.0881 20 21.0881H14.9435ZM14.9435 21.0881H8.88528M8.88528 21.0881V16.0881C8.88528 15.5358 8.43757 15.0881 7.88528 15.0881H4C3.44771 15.0881 3 15.5358 3 16.0881V20.0881C3 20.6404 3.44771 21.0881 4 21.0881H8.88528Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BarGroup03Icon.displayName = 'BarGroup03Icon';

export { BarGroup03Icon };
export default BarGroup03Icon;
