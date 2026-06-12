import * as React from 'react';

export interface Type03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Type03Icon = React.forwardRef<SVGSVGElement, Type03IconProps>(
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
      <path d="M10.2088 16.2004H12.124M12.124 16.2004H14.128M12.124 16.2004V7.80039M12.124 7.80039H8.9999C8.66853 7.80039 8.3999 8.06902 8.3999 8.40039V9.28274M12.124 7.80039H14.9999C15.3313 7.80039 15.5999 8.06902 15.5999 8.40039V9.5298M4.7999 21.6004H19.1999C20.5254 21.6004 21.5999 20.5259 21.5999 19.2004V4.80039C21.5999 3.47491 20.5254 2.40039 19.1999 2.40039H4.7999C3.47442 2.40039 2.3999 3.47491 2.3999 4.80039V19.2004C2.3999 20.5259 3.47442 21.6004 4.7999 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Type03Icon.displayName = 'Type03Icon';

export { Type03Icon };
export default Type03Icon;
