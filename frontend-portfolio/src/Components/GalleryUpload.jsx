import { useState } from 'react'

export default function GalleryUpload({ token }) {
  const [file, setFile]     = useState(null)
  const [form, setForm]     = useState({ title: '', description: '', category: 'project' })
  const [preview, setPreview] = useState(null)
  const [status, setStatus] = useState('')

  const handleFile = (e) => {
    const f = e.target.files[0]
    setFile(f)
    setPreview(URL.createObjectURL(f)) // local preview before upload
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return setStatus('Please select an image')

    const data = new FormData()
    data.append('image', file)           // must match upload.single('image')
    data.append('title', form.title)
    data.append('description', form.description)
    data.append('category', form.category)

    const res = await fetch('/api/gallery', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: data,  // no Content-Type header — let the browser set multipart boundary
    })

    setStatus(res.ok ? 'Uploaded!' : 'Upload failed')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFile} />
      {preview && <img src={preview} alt="preview" style={{ width: 200 }} />}
      <input placeholder="Title" value={form.title}
        onChange={e => setForm({ ...form, title: e.target.value })} />
      <textarea placeholder="Description" value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })} />
      <select value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}>
        <option value="project">Project</option>
        <option value="certificate">Certificate</option>
        <option value="event">Event</option>
        <option value="other">Other</option>
      </select>
      <button type="submit">Upload</button>
      {status && <p>{status}</p>}
    </form>
  )
}