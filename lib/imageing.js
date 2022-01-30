import probe from 'probe-image-size'

const probeImageSize = async (url) => {
  const dim = await probe(url)
  return { width: dim.width, height: dim.height }
}

export default probeImageSize
