import { useState } from 'react'

interface IProps {
  src: string
}
export default function PlaceholderImage({ src }: IProps) {
  const [isImageLoaded, setImageLoaded] = useState(false)
  return (
    <div className='img-container'>
      <img
        onLoad={() => setImageLoaded(true)}
        alt=''
        src={src}
        className={`img-full${isImageLoaded ? ' loaded' : ''}`}
      />
      <img
        alt=''
        fetchPriority='high'
        src={src.replace('.png', '_placeholder.png')}
        className={`img-placeholder${isImageLoaded ? ' loaded' : ''}`}
      />
    </div>
  )
}
