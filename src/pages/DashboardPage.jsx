import MetricCard from '../components/MetricCard'
import { metrics } from '../data/dashboardData'

function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-6">
      <h2 className="text-2xl font-bold text-slate-900">Dashboard general</h2>
      <p className="mt-1 text-slate-500">Resumen de métricas y rendimiento.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            description={metric.description}
          />
        ))}
      </div>
    </div>
  )
}

export default DashboardPage