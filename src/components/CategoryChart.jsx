import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const COLORS = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626']

function CategoryChart({ data }) {
  return (
    <div className="h-80 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-800">Ventas por categoría</h3>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" outerRadius={95} label>
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CategoryChart