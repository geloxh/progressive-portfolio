import { useState } from 'react'
export default function AdminLogin({ onLogin }) {
    const [form, setForm] = useState({ email: '', password: '' })
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('/Api/Auth/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(form),
        })
        const data = await res.json()

        if (!res.ok) {
            setError (data.error || 'Login failed') 
            return
        }

        onLogin(data.token) // pass token up to App.jsx
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email" placeholder="Email" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
                type="password" placeholder="Password" value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit">Log in</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}