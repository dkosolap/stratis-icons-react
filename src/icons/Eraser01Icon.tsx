import * as React from 'react';

export interface Eraser01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Eraser01Icon = React.forwardRef<SVGSVGElement, Eraser01IconProps>(
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
      <path d="M11.1018 21.3411L17.4001 15.0427L21.2716 11.1713C21.482 10.9596 21.6001 10.6732 21.6001 10.3747C21.6001 10.0762 21.482 9.78977 21.2716 9.57805L15.6217 3.9282C15.41 3.71774 15.1236 3.59961 14.8251 3.59961C14.5266 3.59961 14.2402 3.71774 14.0284 3.9282L2.72873 15.2279C2.51828 15.4396 2.40015 15.726 2.40015 16.0245C2.40015 16.3231 2.51828 16.6095 2.72873 16.8212L7.24862 21.3411H19.6783M9.91192 8.04472L17.4001 15.0427" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Eraser01Icon.displayName = 'Eraser01Icon';

export { Eraser01Icon };
export default Eraser01Icon;
