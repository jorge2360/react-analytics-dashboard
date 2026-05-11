function Sidebar() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white px-6 py-4 shadow-sm lg:hidden">
        <h1 className="text-xl font-bold text-slate-900">Analytics</h1>
        <p className="text-sm text-slate-500">Dashboard empresarial</p>
      </header>

      <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-slate-200 bg-white p-6 lg:block">
        <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
        <p className="mt-1 text-sm text-slate-500">Dashboard empresarial</p>

        <nav className="mt-8 space-y-2">
          <a className="block rounded-lg bg-blue-50 px-4 py-2 text-blue-700" href="#">
            Dashboard
          </a>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar