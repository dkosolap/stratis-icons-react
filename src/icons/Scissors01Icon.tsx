import * as React from 'react';

export interface Scissors01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Scissors01Icon = React.forwardRef<SVGSVGElement, Scissors01IconProps>(
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
      <path d="M8.04385 9.24356L19.9345 18.9424M19.9345 5.79144L8.04385 15.4903M17.1948 12.3674L17.1734 12.3888M21.5999 12.3673L21.5784 12.3888M5.68764 10.1751C3.87187 10.1751 2.3999 8.70311 2.3999 6.88735C2.3999 5.07158 3.87187 3.59961 5.68764 3.59961C7.50341 3.59961 8.97538 5.07158 8.97538 6.88735C8.97538 8.70312 7.50341 10.1751 5.68764 10.1751ZM5.68764 21.1342C3.87187 21.1342 2.3999 19.6622 2.3999 17.8465C2.3999 16.0307 3.87187 14.5587 5.68764 14.5587C7.50341 14.5587 8.97538 16.0307 8.97538 17.8465C8.97538 19.6622 7.50341 21.1342 5.68764 21.1342Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Scissors01Icon.displayName = 'Scissors01Icon';

export { Scissors01Icon };
export default Scissors01Icon;
