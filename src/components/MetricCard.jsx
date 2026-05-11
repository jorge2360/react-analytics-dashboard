function MetricCard({ title, value, description, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <h3 className="mt-3 text-3xl font-bold text-slate-900">{value}</h3>
        </div>

        {Icon && (
          <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
            <Icon size={24} />
          </div>
        )}
      </div>

      <p className="mt-4 text-sm text-slate-500">{description}</p>
    </div>
  )
}

export default MetricCard