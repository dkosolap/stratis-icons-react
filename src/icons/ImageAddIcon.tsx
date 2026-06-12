import * as React from 'react';

export interface ImageAddIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const ImageAddIcon = React.forwardRef<SVGSVGElement, ImageAddIconProps>(
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
      <path d="M6.19739 20.9343L15.256 12.4086L19.5188 16.6714M6.19739 20.9343H16.8545C18.6203 20.9343 20.0517 19.5029 20.0517 17.7371V12.4086M6.19739 20.9343C4.43165 20.9343 3.00024 19.5029 3.00024 17.7371V7.07999C3.00024 5.31426 4.43165 3.88285 6.19739 3.88285H13.1245M18.986 9.02857L18.986 6.01428M18.986 6.01428L18.986 2.99998M18.986 6.01428L15.9717 6.01428M18.986 6.01428L22.0002 6.01428M9.39453 8.67856C9.39453 9.56143 8.67882 10.2771 7.79596 10.2771C6.91309 10.2771 6.19739 9.56143 6.19739 8.67856C6.19739 7.7957 6.91309 7.07999 7.79596 7.07999C8.67882 7.07999 9.39453 7.7957 9.39453 8.67856Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ImageAddIcon.displayName = 'ImageAddIcon';

export { ImageAddIcon };
export default ImageAddIcon;
