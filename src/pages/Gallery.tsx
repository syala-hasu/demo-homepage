import { photos } from '../data/photos'
import './Gallery.css'

function Gallery() {
  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <ul className="gallery-grid">
        {photos.map((photo) => (
          <li key={photo.id}>
            <figure className="gallery-item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>
                <span className="gallery-location">{photo.location}</span>
                <p className="gallery-caption">{photo.caption}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Gallery
