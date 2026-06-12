import * as React from 'react';

export interface HorizontalChart02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const HorizontalChart02Icon = React.forwardRef<SVGSVGElement, HorizontalChart02IconProps>(
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
      <path d="M3 14.3547H7.17801M3 14.3547L7.1196 14.3536C7.13918 14.3536 7.15866 14.354 7.17801 14.3547M12.776 9.50813L19.8 9.50813C20.4627 9.50813 21 9.07832 21 8.54813V5.7599C21 5.22971 20.4627 4.7999 19.8 4.7999L4.2 4.7999C3.53726 4.7999 3 5.22971 3 5.7599L3 9.50813L3 14.3547L3 18.2399C3 18.7701 3.53726 19.1999 4.2 19.1999H7.12C7.78274 19.1999 8.32 18.7701 8.32 18.2399V15.3136C8.32 14.799 7.81379 14.3789 7.17801 14.3547M3 9.50813H12.776C13.4387 9.50813 13.976 9.93793 13.976 10.4681V13.3947C13.976 13.9249 13.4387 14.3547 12.776 14.3547H7.17801M3 21.5999V2.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

HorizontalChart02Icon.displayName = 'HorizontalChart02Icon';

export { HorizontalChart02Icon };
export default HorizontalChart02Icon;
