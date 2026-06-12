import * as React from 'react';

export interface AddSquare01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const AddSquare01Icon = React.forwardRef<SVGSVGElement, AddSquare01IconProps>(
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
      <path d="M15.3754 11.9995H12.0004M12.0004 11.9995H8.62537M12.0004 11.9995V15.3744M12.0004 11.9995L12.0004 8.62447M21 6.37498L21 17.625C21 19.489 19.489 21 17.625 21H6.375C4.51104 21 3 19.489 3 17.625V6.37498C3 4.51103 4.51104 3 6.375 3H17.625C19.489 3 21 4.51103 21 6.37498Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

AddSquare01Icon.displayName = 'AddSquare01Icon';

export { AddSquare01Icon };
export default AddSquare01Icon;
