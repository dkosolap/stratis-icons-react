import * as React from 'react';

export interface ColorSwatch01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ColorSwatch01Icon = React.forwardRef<SVGSVGElement, ColorSwatch01IconProps>(
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
      <path d="M6.00029 9.87394C3.56603 10.6385 1.80029 12.9127 1.80029 15.5993C1.80029 18.913 4.48658 21.5993 7.80029 21.5993C9.47873 21.5993 10.9962 20.9101 12.0852 19.7993C13.1461 18.717 13.8003 17.2345 13.8003 15.5993M18.0003 9.87394C20.4348 10.6384 22.2008 12.9127 22.2008 15.5994C22.2008 18.9131 19.5145 21.5994 16.2008 21.5994C14.8498 21.5994 13.6032 21.1529 12.6003 20.3995M18.0003 8.39914C18.0003 11.7128 15.314 14.3991 12.0003 14.3991C8.68658 14.3991 6.00029 11.7128 6.00029 8.39914C6.00029 5.08543 8.68658 2.39914 12.0003 2.39914C15.314 2.39914 18.0003 5.08543 18.0003 8.39914Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ColorSwatch01Icon.displayName = 'ColorSwatch01Icon';

export { ColorSwatch01Icon };
export default ColorSwatch01Icon;
