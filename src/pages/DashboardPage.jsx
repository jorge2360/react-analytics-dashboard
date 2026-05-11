import { useState } from 'react'
import MetricCard from '../components/MetricCard'
import SalesChart from '../components/SalesChart'
import CategoryChart from '../components/CategoryChart'
import RecentSalesTable from '../components/RecentSalesTable'
import { categoryData, recentSales, periodData } from '../data/dashboardData'

function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('mensual')

  const currentData = periodData[selectedPeriod]

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Dashboard general</h2>
          <p className="mt-1 text-slate-500">Resumen de métricas y rendimiento.</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Período
          </label>
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {Object.entries(periodData).map(([key, period]) => (
              <option key={key} value={key}>
                {period.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {currentData.metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            description={metric.description}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <SalesChart data={currentData.salesData} />
        <CategoryChart data={categoryData} />
      </div>

      <div className="mt-6">
        <RecentSalesTable sales={recentSales} />
      </div>
    </div>
  )
}

export default DashboardPage