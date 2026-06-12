import * as React from 'react';

export interface WaveformIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const WaveformIcon = React.forwardRef<SVGSVGElement, WaveformIconProps>(
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
      <path d="M4 15V9M12 20V4M8 17V7M20 9V15M16 7L16 17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

WaveformIcon.displayName = 'WaveformIcon';

export { WaveformIcon };
export default WaveformIcon;
