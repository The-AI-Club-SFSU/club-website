import NativeImage, { ImageProps as NativeImageProps} from 'next/image'

const SOURCE_PLACEHOLDER = '/assets/image.placeholder.web'
const SOURCE_FALLBACK = '/assets/image.missing.webp'

interface ImageProps extends Omit<NativeImageProps, 'src'> {
    src?: string
}

export function Image({src, alt, ...rest}: ImageProps) {
    return <NativeImage 
        alt={alt}
        src={src || SOURCE_FALLBACK}
        placeholder={'blur'}
        blurDataURL={SOURCE_PLACEHOLDER}
        {...rest}
    />
}