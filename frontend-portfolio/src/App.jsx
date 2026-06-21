import { useState } from 'react'
import AdminLogin from './Pages/AdminLogin'
import AdminDashboard from './Pages/AdminDashboard'

export default function App() {
  const [token, setToken] = useState(null)

  if (!token) {
    return <AdminLogin onLogin={setToken} />
  }

  return <AdminDashboard token={token} />
}