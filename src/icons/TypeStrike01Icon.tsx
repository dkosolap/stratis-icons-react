import * as React from 'react';

export interface TypeStrike01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const TypeStrike01Icon = React.forwardRef<SVGSVGElement, TypeStrike01IconProps>(
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
      <path d="M7.93558 21.6004H11.8703M11.8703 21.6004H15.9872M11.8703 21.6004V12.3101M4.21945 7.3188V5.49716C4.21945 5.1299 4.37928 4.79997 4.63318 4.57313M11.8703 4.25845H17.7724C18.4565 4.25845 19.0111 4.81304 19.0111 5.49716V7.82885M11.8703 4.25845V6.73587M11.8703 4.25845H9.79365M20.3227 21.6004L3.6001 2.40039" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

TypeStrike01Icon.displayName = 'TypeStrike01Icon';

export { TypeStrike01Icon };
export default TypeStrike01Icon;
