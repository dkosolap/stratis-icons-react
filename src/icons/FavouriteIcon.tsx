import * as React from 'react';

export interface FavouriteIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FavouriteIcon = React.forwardRef<SVGSVGElement, FavouriteIconProps>(
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
      <path d="M8.7899 6.48395H14.2066M11.5 15.1936L17.1669 20.2558C17.4891 20.5436 18 20.3149 18 19.8829V5C18 3.89543 17.1046 3 16 3H7C5.89543 3 5 3.89543 5 5V19.8829C5 20.3149 5.51092 20.5436 5.8331 20.2558L11.5 15.1936Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FavouriteIcon.displayName = 'FavouriteIcon';

export { FavouriteIcon };
export default FavouriteIcon;
