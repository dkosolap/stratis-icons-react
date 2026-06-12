import * as React from 'react';

export interface DiamondIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const DiamondIcon = React.forwardRef<SVGSVGElement, DiamondIconProps>(
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
      <path d="M10.5086 3.83008L8.45815 9.1427L11.9999 20.1699M11.9999 20.1699L15.6349 9.0495L13.6776 3.83008M21.5999 9.2359L17.5921 3.83008H6.50087L2.3999 9.2359L11.9999 20.1699L21.5999 9.2359ZM2.3999 9.2359H21.5999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

DiamondIcon.displayName = 'DiamondIcon';

export { DiamondIcon };
export default DiamondIcon;
