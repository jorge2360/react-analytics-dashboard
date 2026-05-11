import Sidebar from './components/Sidebar'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar />

      <main className="lg:ml-64">
        <DashboardPage />
      </main>
    </div>
  )
}

export default App