import * as React from 'react';

export interface SmileyWinkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const SmileyWinkIcon = React.forwardRef<SVGSVGElement, SmileyWinkIconProps>(
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
      <path d="M8.67178 14.799C9.37172 15.9298 10.6007 16.6798 11.9998 16.6798C13.399 16.6798 14.6279 15.9298 15.3279 14.799M9.79841 8.9999H7.7999M21.5999 11.9999C21.5999 17.3018 17.3018 21.5999 11.9999 21.5999C6.69797 21.5999 2.3999 17.3018 2.3999 11.9999C2.3999 6.69797 6.69797 2.3999 11.9999 2.3999C17.3018 2.3999 21.5999 6.69797 21.5999 11.9999ZM14.8799 8.9999H14.9649V9.07678H14.8799V8.9999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

SmileyWinkIcon.displayName = 'SmileyWinkIcon';

export { SmileyWinkIcon };
export default SmileyWinkIcon;
