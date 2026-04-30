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
          <li key={photo.src}>
            <button
              type="button"
              className="gallery-item"
              onClick={() => setOpenIndex(i)}
              aria-label={`${photo.caption} を拡大表示`}
            >
              <img src={photo.thumb} alt={photo.caption} loading="lazy" />
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
