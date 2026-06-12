import * as React from 'react';

export interface AddSquare03IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AddSquare03Icon = React.forwardRef<SVGSVGElement, AddSquare03IconProps>(
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
      <path d="M12 7.49997L12 11.9999M12 11.9999V16.4999M12 11.9999H16.5M12 11.9999H7.5M21 6.37498L21 17.625C21 19.489 19.489 21 17.625 21H6.375C4.51104 21 3 19.489 3 17.625V6.37498C3 4.51103 4.51104 3 6.375 3H17.625C19.489 3 21 4.51103 21 6.37498Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

AddSquare03Icon.displayName = 'AddSquare03Icon';

export { AddSquare03Icon };
export default AddSquare03Icon;
