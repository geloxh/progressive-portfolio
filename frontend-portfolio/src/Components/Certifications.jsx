import { useEffect, useState } from 'react'

const CATEGORIES = ['', 'frontend', 'backend', 'cloud', 'devops', 'database']

export default function Certifications() {
  const [certs, setCerts] = useState([])
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = category
      ? `/api/certifications?category=${category}`
      : '/api/certifications'

    setLoading(true)
    fetch(url)
      .then(r => r.json())
      .then(data => { setCerts(data); setLoading(false) })
  }, [category])

  return (
    <section id="certifications">
        <h2>Certifications</h2>

        {/* Category filter */}
        <div className="cert-filters">
            {CATEGORIES.map(c => (
                <button
                    key={c}
                    className={category === c ? 'active' : ''}
                    onClick={() => setCategory(c)}
                >
                    { c || 'All' }
                </button>
            ))}
        </div>

        {loading && <p>Loading...</p>}

        <div className="cert-grid">
            {certs.map(cert => (
                <div key={cert._id} className={`cert-card ${cert.isExpired ? 'expired' : ''}`}>

                    {cert.imageUrl && (
                        <img src={cert.imageUrl} alt={cert.title} className="cert-badge" />
                    )}

                    <div className="cert-body">
                        <span className="cert-category">{cert.category}</span>
                        <h3>{cert.title}</h3>
                        <p className="cert-issuer">{cert.issuer}</p>

                        <div className="cert-dates">
                            <span>Issued: {new Date(cert.issueDate).toLocaleDateString()}</span>
                            {cert.expiryDate && (
                                <span className={cert.isExpiringSoon ? 'expiring-soon' : ''}>
                                    {cert.isExpired
                                    ? 'Expired'
                                    : `Expires: ${new Date(cert.expiryDate).toLocaleDateString()}`}
                                </span>
                            )}
                        </div>

                        {cert.skills.length > 0 && (
                            <div className="cert-skills">
                                {cert.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
                            </div>
                        )}

                        {cert.credentialUrl && (
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="cert-verify-link"
                            >
                                Verify credential
                            </a>
                        )}
                    </div>

                </div>
            ))}
        </div>
    </section>
  )
}