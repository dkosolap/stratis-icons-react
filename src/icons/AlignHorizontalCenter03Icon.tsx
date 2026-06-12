import * as React from 'react';

export interface AlignHorizontalCenter03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlignHorizontalCenter03Icon = React.forwardRef<SVGSVGElement, AlignHorizontalCenter03IconProps>(
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
      <path d="M2.3999 11.9997L21.5999 11.9997M14.6191 5.11997L12.0009 2.3999L9.38272 5.11997M12.0009 2.3999V9.11458M9.38268 18.9948L12.0009 21.7148L14.619 18.9948M12.0009 21.7148V15.0002" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlignHorizontalCenter03Icon.displayName = 'AlignHorizontalCenter03Icon';

export { AlignHorizontalCenter03Icon };
export default AlignHorizontalCenter03Icon;
