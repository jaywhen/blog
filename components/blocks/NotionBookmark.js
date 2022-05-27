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

  if (!previewData) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className='animate-pulse flex justify-between w-full min-h-28 border-2 rounded hover:bg-gray-200 box-border mb-2'>
          <div className='flex flex-col justify-between p-2 sm:w-3/5 w-full'>
            <div className="space-y-2">
              <div className='h-12 w-full bg-slate-200'></div>
              <div className='h-5 w-full bg-slate-300'></div>
            </div>
            <div className='flex mt-2 items-center'>
              <div className='rounded-full mr-2 w-6 bg-slate-400'></div>
              <div className='w-full bg-slate-300 h-4'></div>
            </div>
          </div>
          <div className='rounded hidden sm:w-2/5 sm:block'>
            <div className='sm:w-full sm:h-full bg-slate-200'></div>
          </div>
        </div>
      </a>
    )
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className='flex justify-between w-full min-h-28 border-2 rounded hover:bg-gray-200 box-border mb-2'>
        <div className='flex flex-col justify-between p-2 sm:w-3/5 w-full'>
          <div>
            <div className='text-sm'>{previewData.title}</div>
            <div className='text-xs text-slate-400 truncate'>{previewData.description}</div>
          </div>
          <div className='flex text-xs mt-2'>
            <img src={previewData.favicon} alt='favicon' className='mr-2 w-4 h-4' />
            <div className='truncate'>{url}</div>
          </div>
        </div>
        <div className='rounded hidden sm:block'>
          <img src={previewData.cover} alt={previewData.title} className='sm:w-full sm:h-full object-cover' />
        </div>
      </div>
    </a>
  )
}

export default NotionBookmark