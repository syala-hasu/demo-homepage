import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import { photos } from '../data/photos'
import './Gallery.css'

function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const close = () => setOpenIndex(null)
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length))

  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <ul className="gallery-grid">
        {photos.map((photo, i) => (
          <li key={photo.id}>
            <button
              type="button"
              className="gallery-item"
              onClick={() => setOpenIndex(i)}
              aria-label={`${photo.location} の写真を拡大表示`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="gallery-meta">
                <span className="gallery-location">{photo.location}</span>
                <span className="gallery-caption">{photo.caption}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      {openIndex !== null && (
        <Lightbox
          photos={photos}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  )
}

export default Gallery
