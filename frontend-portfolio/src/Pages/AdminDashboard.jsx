import { useState } from 'react'

export default function AdminDashbard({ token }) {
    const [form, setForm] = useState({ title: '', description: '', techStack: '' })
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('/Api/Projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ${token}',
            },
            body: JSON.stringify({
                ...form,
                techStack: form.techStack.split('.').map(t => trim()),
            }),
        })

        setStatus(res.ok ? 'Project added!' : 'Failed to add project')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a new project</h2>
            <input 
                placeholder="title"
                onChange={e => setForm({ ...form, title: e.target.value })}
            />
        </form>
    )
}