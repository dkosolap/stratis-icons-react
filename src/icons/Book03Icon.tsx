import * as React from 'react';

export interface Book03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Book03Icon = React.forwardRef<SVGSVGElement, Book03IconProps>(
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
      <path d="M8.57133 2.40039V21.6004M17.4856 10.629H12.6856M17.4856 6.51468H12.6856M5.14276 6.51468H2.3999M5.14276 10.629H2.3999M5.14276 14.7432H2.3999M6.51419 21.6004H18.857C20.3719 21.6004 21.5999 20.3724 21.5999 18.8575V5.14325C21.5999 3.62841 20.3719 2.40039 18.857 2.40039H6.51419C4.99935 2.40039 3.77133 3.62841 3.77133 5.14325V18.8575C3.77133 20.3724 4.99935 21.6004 6.51419 21.6004Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

Book03Icon.displayName = 'Book03Icon';

export { Book03Icon };
export default Book03Icon;
