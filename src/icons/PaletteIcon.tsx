import * as React from 'react';

export interface PaletteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PaletteIcon = React.forwardRef<SVGSVGElement, PaletteIconProps>(
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
      <path d="M12.0002 6.00039V6.03362M6.03313 12.0006H5.9999M16.2429 7.75794L16.2194 7.78143M7.78108 16.2197L7.75758 16.2432M7.78108 7.78106L7.75758 7.75756M11.9999 21.6004C6.69797 21.6004 2.3999 17.3023 2.3999 12.0004C2.3999 6.69846 6.69797 2.40039 11.9999 2.40039C17.3018 2.40039 21.5999 6.69846 21.5999 12.0004C21.5999 13.6145 20.1085 14.6884 18.4945 14.6884H17.8679C17.5443 14.6884 17.2252 14.7637 16.9359 14.9084C15.9064 15.4231 15.4892 16.6749 16.0039 17.7044C16.1486 17.9937 16.2239 18.3128 16.2239 18.6363V18.8255C16.2239 19.9261 15.6063 20.9683 14.5449 21.2594C13.7344 21.4817 12.881 21.6004 11.9999 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PaletteIcon.displayName = 'PaletteIcon';

export { PaletteIcon };
export default PaletteIcon;
