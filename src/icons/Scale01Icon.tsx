import * as React from 'react';

export interface Scale01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Scale01Icon = React.forwardRef<SVGSVGElement, Scale01IconProps>(
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
      <path d="M5.36287 2.40039C3.72647 2.40039 2.3999 3.72695 2.3999 5.36335M14.1332 2.40039H9.86657M21.5999 5.36335C21.5999 3.72696 20.2733 2.40039 18.6369 2.40039M2.3999 9.86706V14.1337M21.5999 14.1337V9.86706M2.3999 18.6374C2.3999 20.2738 3.72647 21.6004 5.36286 21.6004M18.6369 21.6004C20.2733 21.6004 21.5999 20.2738 21.5999 18.6374M9.86657 21.6004H14.1332M2.3999 12.0004H9.86657C11.0448 12.0004 11.9999 12.9555 11.9999 14.1337V21.6004H5.5999C3.83259 21.6004 2.3999 20.1677 2.3999 18.4004V12.0004Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Scale01Icon.displayName = 'Scale01Icon';

export { Scale01Icon };
export default Scale01Icon;
