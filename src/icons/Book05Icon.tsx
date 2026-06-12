import * as React from 'react';

export interface Book05IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Book05Icon = React.forwardRef<SVGSVGElement, Book05IconProps>(
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
      <path d="M20.4924 15.6927H6.46166C4.83029 15.6927 3.50781 17.0152 3.50781 18.6465M20.4924 15.6927V20.1235C20.4924 20.9391 19.8312 21.6004 19.0155 21.6004H6.46166C4.83029 21.6004 3.50781 20.2779 3.50781 18.6465M20.4924 15.6927V3.87731C20.4924 3.06163 19.8312 2.40039 19.0155 2.40039H8.30781M3.50781 18.6465V5.35424C3.50781 3.72287 4.83029 2.40039 6.46166 2.40039H8.30781M8.30781 15.6004V2.40039" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Book05Icon.displayName = 'Book05Icon';

export { Book05Icon };
export default Book05Icon;
