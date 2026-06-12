import * as React from 'react';

export interface ImageMinusIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ImageMinusIcon = React.forwardRef<SVGSVGElement, ImageMinusIconProps>(
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
      <path d="M5.69739 20.5L14.756 11.9743L19.0188 16.2371M5.69739 20.5H16.3545C18.1203 20.5 19.5517 19.0686 19.5517 17.3029V11.9743M5.69739 20.5C3.93165 20.5 2.50024 19.0686 2.50024 17.3029V6.64572C2.50024 4.87999 3.93165 3.44858 5.69739 3.44858H12.6245M15.4717 6.64572H21.5002M8.89453 8.24429C8.89453 9.12716 8.17882 9.84286 7.29596 9.84286C6.41309 9.84286 5.69739 9.12716 5.69739 8.24429C5.69739 7.36143 6.41309 6.64572 7.29596 6.64572C8.17882 6.64572 8.89453 7.36143 8.89453 8.24429Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ImageMinusIcon.displayName = 'ImageMinusIcon';

export { ImageMinusIcon };
export default ImageMinusIcon;
