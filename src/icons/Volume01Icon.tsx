import * as React from 'react';

export interface Volume01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Volume01Icon = React.forwardRef<SVGSVGElement, Volume01IconProps>(
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
      <path d="M21 21L17.625 18L21 15.0012L17.625 12L21 9.00004L17.625 6.00006L21 3M12.0161 5.92882L7.64072 9.50821H3V14.6616L7.64072 14.6603L12.0161 18.2409V5.92882Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Volume01Icon.displayName = 'Volume01Icon';

export { Volume01Icon };
export default Volume01Icon;
