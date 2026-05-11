function getStatusClass(status) {
  if (status === 'Completado') {
    return 'bg-emerald-100 text-emerald-700'
  }

  if (status === 'Pendiente') {
    return 'bg-amber-100 text-amber-700'
  }

  return 'bg-red-100 text-red-700'
}

function RecentSalesTable({ sales }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:bg-slate-800 dark:text-white dark:border-slate-700">
      <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-400">Últimas ventas</h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 dark:bg-slate-800 dark:text-white dark:border-slate-700">
              <th className="p-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-400">Cliente</th>
              <th className="p-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-400">Producto</th>
              <th className="p-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-400">Monto</th>
              <th className="p-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-400">Estado</th>
              <th className="p-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-400">Fecha</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-3 text-sm font-medium text-slate-800 dark:text-slate-400">{sale.customer}</td>
                <td className="p-3 text-sm text-slate-600 dark:text-slate-400">{sale.product}</td>
                <td className="p-3 text-sm text-slate-700 dark:text-slate-400">Q {sale.amount.toLocaleString()}</td>
                <td className="p-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClass(sale.status)}`}>
                    {sale.status}
                  </span>
                </td>
                <td className="p-3 text-sm text-slate-600 dark:text-slate-400">{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentSalesTable