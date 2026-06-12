import * as React from 'react';

export interface FlashOffIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const FlashOffIcon = React.forwardRef<SVGSVGElement, FlashOffIconProps>(
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
      <path d="M14.1483 18.3204L12.0933 21.3198C11.7405 21.8283 10.9102 21.6 10.9102 20.9877L10.8998 15.1343C10.8998 14.4597 10.329 13.92 9.6233 13.9096L5.4408 13.8577C4.93226 13.8474 4.63129 13.3181 4.91151 12.9133L6.60319 10.4536M8.35714 7.86939L11.9065 2.6802C12.2594 2.17166 13.0897 2.4 13.0897 3.01232L13.1 8.86574C13.1 9.54034 13.6709 10.08 14.3766 10.0904L18.5591 10.1423C19.0676 10.1526 19.3686 10.6819 19.0884 11.0867L15.8296 15.84M20.4001 20.3997L3.6001 3.59973" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FlashOffIcon.displayName = 'FlashOffIcon';

export { FlashOffIcon };
export default FlashOffIcon;
