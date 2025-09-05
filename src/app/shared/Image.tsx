import NativeImage, { ImageProps } from 'next/image'

// const SOURCE_PLACEHOLDER = require('$/images/image.placeholder.webp')
// const SOURCE_FALLBACK = require('$/images/image.missing.webp')

export function Image({alt, ...rest}: ImageProps) {
    return <NativeImage alt={alt} {...rest} />
}