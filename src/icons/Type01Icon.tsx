import * as React from 'react';

export interface Type01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Type01Icon = React.forwardRef<SVGSVGElement, Type01IconProps>(
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
      <path d="M2.3999 20.471H5.78814M13.694 20.471H21.5999M5.6752 14.8239H13.4681M9.40225 4.99804L15.9528 20.471M3.52931 20.471L10.3058 2.40039H12.5646L20.4705 20.471" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Type01Icon.displayName = 'Type01Icon';

export { Type01Icon };
export default Type01Icon;
