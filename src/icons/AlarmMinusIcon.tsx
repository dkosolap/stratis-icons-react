import * as React from 'react';

export interface AlarmMinusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AlarmMinusIcon = React.forwardRef<SVGSVGElement, AlarmMinusIconProps>(
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
      <path d="M2.3999 7.00839V6.24039C2.3999 4.11962 4.11913 2.40039 6.2399 2.40039H7.0079M16.9919 2.40039L17.7599 2.40039C19.8807 2.40039 21.5999 4.11962 21.5999 6.24039V7.00839M5.8559 18.9124L3.1679 21.6004M20.8319 21.6004L18.1439 18.9124M14.9999 12.6004H8.9999M20.4479 12.7684C20.4479 17.4341 16.6656 21.2164 11.9999 21.2164C7.3342 21.2164 3.5519 17.4341 3.5519 12.7684C3.5519 8.10269 7.3342 4.32039 11.9999 4.32039C16.6656 4.32039 20.4479 8.10269 20.4479 12.7684Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

AlarmMinusIcon.displayName = 'AlarmMinusIcon';

export { AlarmMinusIcon };
export default AlarmMinusIcon;
