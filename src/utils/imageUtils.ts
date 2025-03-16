
/**
 * Image Optimization Utility
 * 
 * This utility helps with optimizing images for better performance.
 * It provides functions to get appropriate image sizes and formats.
 */

/**
 * Get responsive image size based on screen size and container width
 * @param baseWidth The base width of the image
 * @param baseHeight The base height of the image
 * @param containerWidthPercent The width of the container as a percentage of screen width
 */
export const getResponsiveImageSize = (
  baseWidth: number, 
  baseHeight: number, 
  containerWidthPercent: number = 100
) => {
  // Default responsive sizes based on common screen breakpoints
  return {
    width: baseWidth,
    height: baseHeight,
    sizes: `(max-width: 640px) ${Math.min(640, baseWidth * (containerWidthPercent/100))}px, 
            (max-width: 768px) ${Math.min(768, baseWidth * (containerWidthPercent/100))}px, 
            (max-width: 1024px) ${Math.min(1024, baseWidth * (containerWidthPercent/100))}px, 
            (max-width: 1280px) ${Math.min(1280, baseWidth * (containerWidthPercent/100))}px, 
            ${baseWidth}px`
  };
};

/**
 * Get appropriate loading strategy for images
 * @param index The index of the image in a list
 * @param isAboveFold Whether the image is above the fold
 */
export const getLoadingStrategy = (index: number, isAboveFold: boolean = false) => {
  // For images above the fold or the first few in a list, use eager loading
  if (isAboveFold || index < 2) {
    return 'eager';
  }
  // For all other images, use lazy loading
  return 'lazy';
};

/**
 * Calculate aspect ratio for responsive images
 * @param width The width of the image
 * @param height The height of the image
 */
export const getAspectRatio = (width: number, height: number) => {
  return width / height;
};
