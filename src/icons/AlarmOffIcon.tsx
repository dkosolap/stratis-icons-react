import * as React from 'react';

export interface AlarmOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlarmOffIcon = React.forwardRef<SVGSVGElement, AlarmOffIconProps>(
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
      <path d="M2.3999 7.00839V6.24039C2.3999 5.37576 2.68567 4.57787 3.1679 3.93602M16.9919 2.40039L17.7599 2.40039C19.8807 2.40039 21.5999 4.11962 21.5999 6.24039V7.00839M5.8559 18.9124L3.1679 21.6004M20.8319 21.6004L3.5519 3.49808M9.5999 4.66616C10.3607 4.44116 11.1662 4.32039 11.9999 4.32039C16.6656 4.32039 20.4479 8.10269 20.4479 12.7684C20.4479 14.1053 20.1373 15.3698 19.5844 16.4934M17.7599 18.9483C16.2509 20.3554 14.2259 21.2164 11.9999 21.2164C7.3342 21.2164 3.5519 17.4341 3.5519 12.7684C3.5519 10.5424 4.41287 8.51741 5.81996 7.00839" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

AlarmOffIcon.displayName = 'AlarmOffIcon';

export { AlarmOffIcon };
export default AlarmOffIcon;
