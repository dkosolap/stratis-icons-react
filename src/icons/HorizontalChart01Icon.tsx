import * as React from 'react';

export interface HorizontalChart01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const HorizontalChart01Icon = React.forwardRef<SVGSVGElement, HorizontalChart01IconProps>(
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
      <path d="M3 9.64508H7.17801M3 9.64508L7.1196 9.64618C7.13918 9.64618 7.15866 9.64581 7.17801 9.64508M12.776 14.4917L19.8 14.4917C20.4627 14.4917 21 14.9215 21 15.4517V18.2399C21 18.7701 20.4627 19.1999 19.8 19.1999L4.2 19.1999C3.53726 19.1999 3 18.7701 3 18.2399L3 14.4917L3 9.64508L3 5.7599C3 5.22971 3.53726 4.7999 4.2 4.7999H7.12C7.78274 4.7999 8.32 5.22971 8.32 5.7599V8.68618C8.32 9.20083 7.81379 9.62087 7.17801 9.64508M3 14.4917H12.776C13.4387 14.4917 13.976 14.0619 13.976 13.5317V10.6051C13.976 10.0749 13.4387 9.64508 12.776 9.64508L7.17801 9.64508M3 21.5999V2.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

HorizontalChart01Icon.displayName = 'HorizontalChart01Icon';

export { HorizontalChart01Icon };
export default HorizontalChart01Icon;
