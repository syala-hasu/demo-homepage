import { useEffect } from 'react'
import type { Photo } from '../data/photos'
import './Lightbox.css'

type LightboxProps = {
  photos: Photo[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, onPrev, onNext])

  const photo = photos[index]
  if (!photo) return null

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="拡大表示"
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox-button lightbox-close"
        aria-label="閉じる"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
      >
        ×
      </button>
      <button
        type="button"
        className="lightbox-button lightbox-prev"
        aria-label="前の写真"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
      >
        ‹
      </button>
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} className="lightbox-image" />
        <figcaption className="lightbox-caption">
          <span className="lightbox-location">{photo.location}</span>
          <span>{photo.caption}</span>
          <span className="lightbox-counter">
            {index + 1} / {photos.length}
          </span>
        </figcaption>
      </figure>
      <button
        type="button"
        className="lightbox-button lightbox-next"
        aria-label="次の写真"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
      >
        ›
      </button>
    </div>
  )
}

export default Lightbox
