import Image from "next/image"
import { useEffect } from "react"

export const getMediaCtx = (value) => {
    const src = value.type === 'external' ? value.external.url : value.file.url
    const expire = value.type === 'file' ? value.file.expiry_time : null
    const caption = value.caption[0] ? value.caption[0].plain_text : ''
    return { src, caption, expire }
  }
  
const NotionImage = ({ value }) => {
  const { src: imageSrc, caption: imageCaption } = getMediaCtx(value)
  const {
    dim: { width, height },
  } = value || {}

  return (
    <figure className="my-2">
      <div className="shadow-xl">
        {width && height ? (
          value.type === 'file' ? (<Image src={imageSrc} alt={imageCaption} width={width} height={height} />) :
          (<img src={imageSrc} alt={imageCaption} width={width} height={height} />)
        ) : (
          value.type === 'file' ? (<Image src={imageSrc} alt={imageCaption} />) :
          (<img src={imageSrc} alt={imageCaption} />)
        )}
      </div>
      {imageCaption && (
        <figcaption>
          <p className="my-2 text-center opacity-80">{imageCaption}</p>
        </figcaption>
      )}
    </figure>
  )
}
  
export default NotionImage
  