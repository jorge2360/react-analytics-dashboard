import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'

function SalesChart({ data }) {
  return (
    <div className="h-80 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-700">
      <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-400">Ventas mensuales</h3>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ventas" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesChart