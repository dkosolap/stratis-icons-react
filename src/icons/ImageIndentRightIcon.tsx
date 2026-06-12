import * as React from 'react';

export interface ImageIndentRightIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ImageIndentRightIcon = React.forwardRef<SVGSVGElement, ImageIndentRightIconProps>(
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
      <path d="M21.6001 19.2002L2.4001 19.2002M10.8001 14.0002L2.4001 14.0002M10.8001 8.80019L2.4001 8.80019M21.6001 3.6002L2.4001 3.60019M20.4001 8.40019L16.8001 8.40019C16.1374 8.40019 15.6001 8.93745 15.6001 9.60019L15.6001 13.2002C15.6001 13.8629 16.1374 14.4002 16.8001 14.4002L20.4001 14.4002C21.0628 14.4002 21.6001 13.8629 21.6001 13.2002L21.6001 9.60019C21.6001 8.93745 21.0628 8.40019 20.4001 8.40019Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ImageIndentRightIcon.displayName = 'ImageIndentRightIcon';

export { ImageIndentRightIcon };
export default ImageIndentRightIcon;
