import { useEffect, useState } from 'react'

const NotionBookmark = (value) => {
  const { url } = value.value;
  const [previewData, setPreviewData] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/bookmark/${encodeURIComponent(url)}`)
      .then(res => res.json())
      .then(data => { setPreviewData(data); })
      .catch(error => setError(error));
  }, [url])

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className='flex justify-between w-full h-28 border-2 rounded hover:bg-gray-200 box-border mb-2'>
        <div className='flex flex-col justify-between p-2 w-3/5'>
          <div>
            <div className='text-sm'>{previewData.title}</div>
            <div className='text-xs text-slate-400 truncate'>{previewData.description}</div>
          </div>
          <div className='flex text-xs'>
            <img src={previewData.favicon} alt='favicon' className='mr-2 w-4 h-4' />
            <div className='truncate'>{url}</div>
          </div>
        </div>
        <div className='rounded'>
          <img src={previewData.cover} alt={previewData.title} className='w-full h-full' />
        </div>
      </div>
    </a>
  )
}

export default NotionBookmark