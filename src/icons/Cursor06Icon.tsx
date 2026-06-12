import * as React from 'react';

export interface Cursor06IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Cursor06Icon = React.forwardRef<SVGSVGElement, Cursor06IconProps>(
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
      <path d="M9.5999 19.6331H4.56997C3.37147 19.6331 2.3999 18.6687 2.3999 17.479V4.55448C2.3999 3.36481 3.37147 2.40039 4.56997 2.40039H17.5904C18.7889 2.40039 19.7604 3.36481 19.7604 4.55448V8.40039M17.3507 15.9773L21.0644 14.7209C21.7605 14.4854 21.7838 13.5303 21.0999 13.2626L11.8926 9.65799C11.252 9.40723 10.6113 10.0188 10.8515 10.6516L14.3589 19.893C14.6152 20.5684 15.5908 20.5699 15.8493 19.8953L17.3507 15.9773Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Cursor06Icon.displayName = 'Cursor06Icon';

export { Cursor06Icon };
export default Cursor06Icon;
