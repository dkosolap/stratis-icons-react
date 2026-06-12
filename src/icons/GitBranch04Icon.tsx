import * as React from 'react';

export interface GitBranch04IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const GitBranch04Icon = React.forwardRef<SVGSVGElement, GitBranch04IconProps>(
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
      <path d="M15.0084 16.5C15.0084 17.8807 16.1258 19 17.5042 19C18.8826 19 20 17.8807 20 16.5C20 15.1193 18.8826 14 17.5042 14C16.1258 14 15.0084 15.1193 15.0084 16.5ZM15.0084 16.5H12.5133C9.21052 16.5 6.53309 13.8181 6.53309 10.5097V9.00126M8.99158 6.5C8.99158 7.88071 7.87418 9 6.49579 9C5.1174 9 4 7.88071 4 6.5C4 5.11929 5.1174 4 6.49579 4C7.87418 4 8.99158 5.11929 8.99158 6.5Z" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

GitBranch04Icon.displayName = 'GitBranch04Icon';

export { GitBranch04Icon };
export default GitBranch04Icon;
