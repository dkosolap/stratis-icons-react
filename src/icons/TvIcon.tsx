import * as React from 'react';

export interface TvIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TvIcon = React.forwardRef<SVGSVGElement, TvIconProps>(
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
      <path d="M8.625 20L12 16.5714L15.375 20M5.25 16.5714H18.75C19.9926 16.5714 21 15.5481 21 14.2857V6.28571C21 5.02335 19.9926 4 18.75 4H5.25C4.00736 4 3 5.02335 3 6.28571V14.2857C3 15.5481 4.00736 16.5714 5.25 16.5714Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TvIcon.displayName = 'TvIcon';

export { TvIcon };
export default TvIcon;
