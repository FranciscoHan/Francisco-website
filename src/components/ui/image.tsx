'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type ImageFormat = 'jpg' | 'png' | 'webp' | 'bmp' | 'gif' | 'tiff'
type NativeImgProps = React.ComponentPropsWithoutRef<'img'>

export interface ImageProps extends NativeImgProps {
  quality?: number
  format?: ImageFormat
  breakpoints?: Array<number>
}

const DEFAULT_QUALITY = 80

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      width,
      height,
      quality = DEFAULT_QUALITY,
      format,
      sizes,
      srcSet: userSrcSet,
      className,
      loading = 'lazy',
      decoding = 'async',
      ...rest
    },
    ref,
  ) => {
    return (
      <img
        {...rest}
        ref={ref}
        src={src}
        width={width}
        height={height}
        sizes={sizes}
        srcSet={userSrcSet}
        className={cn(
          'bg-linear-to-b from-gray-50/20 to-gray-200/20',
          className,
        )}
        loading={loading}
        decoding={decoding}
      />
    )
  },
)

Image.displayName = 'Image'
export default Image
