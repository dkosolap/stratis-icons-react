import * as React from 'react';

export interface ChartBreakoutCircleIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ChartBreakoutCircleIcon = React.forwardRef<SVGSVGElement, ChartBreakoutCircleIconProps>(
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
      <path d="M2.96688 13.7256C7.50273 13.7256 13.7395 14.2926 14.3065 10.3237M14.3065 14.3999V10.3237H10.9046M14.2291 2.3999V4.84687M21.5999 9.77066H19.1529M19.332 4.66783L17.7084 6.28878M9.5999 2.70234C5.45936 3.76805 2.3999 7.52669 2.3999 11.9999C2.3999 17.3018 6.69797 21.5999 11.9999 21.5999C16.6866 21.5999 20.5889 18.2414 21.4314 13.7999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ChartBreakoutCircleIcon.displayName = 'ChartBreakoutCircleIcon';

export { ChartBreakoutCircleIcon };
export default ChartBreakoutCircleIcon;
