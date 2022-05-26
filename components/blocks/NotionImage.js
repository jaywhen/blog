import Image from "next/image"

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
    <figure className="my-4 flex flex-col items-center justify-center z-0">
      <div className="shadow-2xl">
        {width && height ? (
          value.type === 'file' ? (<Image src={imageSrc} alt={imageCaption} width={width} height={height} />) :
            (<img src={imageSrc} alt={imageCaption} width={width} height={height} />)
        ) : (
          value.type === 'file' ? (<Image src={imageSrc} alt={imageCaption} />) :
            (<img src={imageSrc} alt={imageCaption} />)
        )}
      </div>
      {imageCaption && (
        <figcaption className="my-2 w-7/12">
          <p className="my-2 text-center opacity-80">{imageCaption}</p>
          <div className="w-full h-[1px] bg-slate-200"></div>
        </figcaption>
      )}
    </figure>
  )
}

export default NotionImage
