import Sidebar from './components/Sidebar'
import DashboardPage from './pages/DashboardPage'
import { useEffect, useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Sidebar />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105 dark:bg-white dark:text-slate-900"
      >
        {darkMode ? 'Modo claro' : 'Modo oscuro'}
      </button>

      <main className="lg:ml-64">
        <DashboardPage />
      </main>
    </div>
  )
}

export default App