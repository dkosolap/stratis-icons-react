import * as React from 'react';

export interface ImageIndentLeftIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ImageIndentLeftIcon = React.forwardRef<SVGSVGElement, ImageIndentLeftIconProps>(
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
      <path d="M2.3999 3.59961L21.5999 3.59961M13.1999 8.79961L21.5999 8.79961M13.1999 13.9996L21.5999 13.9996M2.3999 19.1996H21.5999M3.5999 14.3996H7.1999C7.86264 14.3996 8.3999 13.8624 8.3999 13.1996V9.59961C8.3999 8.93687 7.86264 8.39961 7.1999 8.39961H3.5999C2.93716 8.39961 2.3999 8.93687 2.3999 9.59961V13.1996C2.3999 13.8624 2.93716 14.3996 3.5999 14.3996Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ImageIndentLeftIcon.displayName = 'ImageIndentLeftIcon';

export { ImageIndentLeftIcon };
export default ImageIndentLeftIcon;
