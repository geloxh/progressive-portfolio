import { useEffect, useState } from 'react'

export default function Gallery() {
  const [images, setImages]     = useState([])
  const [category, setCategory] = useState('')

  useEffect(() => {
    const url = category ? `/api/gallery?category=${category}` : '/api/gallery'
    fetch(url)
      .then(r => r.json())
      .then(setImages)
  }, [category])

  return (
    <section id="gallery">
      <div className="gallery-filters">
        {['', 'project', 'certificate', 'event'].map(c => (
          <button
            key={c}
            className={category === c ? 'active' : ''}
            onClick={() => setCategory(c)}
          >
            {c || 'All'}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {images.map(img => (
          <div key={img._id} className="gallery-card">
            <img src={img.imageUrl} alt={img.title} loading="lazy" />
            <div className="gallery-info">
              <h3>{img.title}</h3>
              {img.description && <p>{img.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}