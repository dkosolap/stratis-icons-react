import * as React from 'react';

export interface PaintBucket02IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const PaintBucket02Icon = React.forwardRef<SVGSVGElement, PaintBucket02IconProps>(
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
      <path d="M17.9133 11.3598C17.927 11.8878 17.7323 12.4202 17.3294 12.8232L12.1684 17.9842C11.3889 18.7636 10.1252 18.7636 9.34571 17.9842L4.18469 12.8232C3.78174 12.4202 3.5871 11.8878 3.60077 11.3598M17.9133 11.3598C17.9017 10.9108 17.7394 10.4649 17.4264 10.1045C17.3902 10.025 17.3395 9.95052 17.2741 9.88513L10.8478 3.45889M17.9133 11.3598H3.60077M3.60077 11.3598C3.61355 10.8665 3.80819 10.377 4.18469 10.0005C4.31739 9.86779 10.8478 3.45889 10.8478 3.45889M10.8478 3.45889L9.78935 2.40039M4.61062 21.6004H15.2211M19.5496 15.1941C19.4868 15.0949 19.3792 15.0318 19.2626 15.0318C19.1459 15.0318 19.0383 15.095 18.9755 15.1941C18.7512 15.5637 18.0247 16.8258 18.0247 17.3758C18.0247 18.0609 18.5808 18.6199 19.2626 18.6199C19.9443 18.6199 20.5004 18.061 20.5004 17.3758C20.5004 16.8168 19.7739 15.5637 19.5496 15.1941Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PaintBucket02Icon.displayName = 'PaintBucket02Icon';

export { PaintBucket02Icon };
export default PaintBucket02Icon;
