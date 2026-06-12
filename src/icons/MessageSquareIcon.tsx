import * as React from 'react';

export interface MessageSquareIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const MessageSquareIcon = React.forwardRef<SVGSVGElement, MessageSquareIconProps>(
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
      <path d="M6.67816 21.5999L11.6869 16.5912H19.5999C20.7045 16.5912 21.5999 15.6958 21.5999 14.5912V4.3999C21.5999 3.29533 20.7045 2.3999 19.5999 2.3999H4.3999C3.29533 2.3999 2.3999 3.29533 2.3999 4.3999V14.5912C2.3999 15.6958 3.29533 16.5912 4.3999 16.5912H6.67816V21.5999Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

MessageSquareIcon.displayName = 'MessageSquareIcon';

export { MessageSquareIcon };
export default MessageSquareIcon;
