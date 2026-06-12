import * as React from 'react';

export interface Star01IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const Star01Icon = React.forwardRef<SVGSVGElement, Star01IconProps>(
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
      <path d="M10.8909 3.17251C11.2718 2.14302 12.728 2.14302 13.1089 3.17251L15.005 8.29665C15.1248 8.62032 15.38 8.87552 15.7036 8.99529L20.8278 10.8914C21.8573 11.2723 21.8573 12.7284 20.8278 13.1094L15.7036 15.0055C15.38 15.1253 15.1248 15.3805 15.005 15.7041L13.1089 20.8283C12.728 21.8578 11.2719 21.8578 10.8909 20.8283L8.9948 15.7041C8.87503 15.3805 8.61984 15.1253 8.29617 15.0055L3.17203 13.1094C2.14253 12.7284 2.14253 11.2723 3.17203 10.8914L8.29616 8.99529C8.61984 8.87552 8.87503 8.62032 8.9948 8.29665L10.8909 3.17251Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Star01Icon.displayName = 'Star01Icon';

export { Star01Icon };
export default Star01Icon;
