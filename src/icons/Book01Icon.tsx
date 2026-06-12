import * as React from 'react';

export interface Book01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Book01Icon = React.forwardRef<SVGSVGElement, Book01IconProps>(
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
      <path d="M12.139 20.4866C13.5303 19.4663 17.3703 18.0379 21.5999 20.4866V5.18226M2.3999 4.904V20.4866C3.79121 19.4663 7.63121 18.0379 11.8608 20.4866V5.46052M2.3999 4.86475C3.79121 3.84446 7.63121 2.41605 11.8608 4.86475M12.139 4.86475C13.5303 3.84446 17.3703 2.41605 21.5999 4.86475" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Book01Icon.displayName = 'Book01Icon';

export { Book01Icon };
export default Book01Icon;
