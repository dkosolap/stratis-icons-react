import * as React from 'react';

export interface ColorPickerIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ColorPickerIcon = React.forwardRef<SVGSVGElement, ColorPickerIconProps>(
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
      <path d="M10.473 6.60748L17.3928 13.5273M2.3999 16.9872L16.0313 3.35582C17.3052 2.08192 19.3706 2.08191 20.6445 3.35581C21.9184 4.62971 21.9184 6.69512 20.6445 7.96902L7.0131 21.6004H2.3999V16.9872Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ColorPickerIcon.displayName = 'ColorPickerIcon';

export { ColorPickerIcon };
export default ColorPickerIcon;
