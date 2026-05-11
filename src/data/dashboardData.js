export const metrics = [
  {
    id: 1,
    title: 'Ventas totales',
    value: 'Q 48,750',
    description: 'Ingresos del mes actual',
  },
  {
    id: 2,
    title: 'Clientes activos',
    value: '1,284',
    description: 'Clientes registrados activos',
  },
  {
    id: 3,
    title: 'Pedidos',
    value: '356',
    description: 'Pedidos procesados este mes',
  },
  {
    id: 4,
    title: 'Conversión',
    value: '18.4%',
    description: 'Tasa de conversión mensual',
  },
]
export const salesData = [
  { month: 'Ene', ventas: 12000 },
  { month: 'Feb', ventas: 18500 },
  { month: 'Mar', ventas: 16000 },
  { month: 'Abr', ventas: 22000 },
  { month: 'May', ventas: 27500 },
  { month: 'Jun', ventas: 31000 },
]

export const categoryData = [
  { name: 'Tecnología', value: 35 },
  { name: 'Hogar', value: 25 },
  { name: 'Ropa', value: 20 },
  { name: 'Oficina', value: 20 },
]
export const recentSales = [
  {
    id: 1,
    customer: 'Carlos Méndez',
    product: 'Laptop Lenovo',
    amount: 5200,
    status: 'Completado',
    date: '2026-03-10',
  },
  {
    id: 2,
    customer: 'María López',
    product: 'Monitor Dell',
    amount: 1450,
    status: 'Pendiente',
    date: '2026-03-11',
  },
  {
    id: 3,
    customer: 'Luis García',
    product: 'Teclado mecánico',
    amount: 650,
    status: 'Completado',
    date: '2026-03-12',
  },
  {
    id: 4,
    customer: 'Ana Pérez',
    product: 'Mouse inalámbrico',
    amount: 250,
    status: 'Cancelado',
    date: '2026-03-13',
  },
]
export const periodData = {
  mensual: {
    label: 'Mensual',
    metrics: [
      { id: 1, title: 'Ventas totales', value: 'Q 48,750', description: 'Ingresos del mes actual' },
      { id: 2, title: 'Clientes activos', value: '1,284', description: 'Clientes activos del mes' },
      { id: 3, title: 'Pedidos', value: '356', description: 'Pedidos procesados este mes' },
      { id: 4, title: 'Conversión', value: '18.4%', description: 'Tasa de conversión mensual' },
    ],
    salesData: [
      { month: 'Sem 1', ventas: 12000 },
      { month: 'Sem 2', ventas: 9500 },
      { month: 'Sem 3', ventas: 14250 },
      { month: 'Sem 4', ventas: 13000 },
    ],
  },
  trimestral: {
    label: 'Trimestral',
    metrics: [
      { id: 1, title: 'Ventas totales', value: 'Q 138,400', description: 'Ingresos del trimestre' },
      { id: 2, title: 'Clientes activos', value: '3,420', description: 'Clientes activos del trimestre' },
      { id: 3, title: 'Pedidos', value: '1,024', description: 'Pedidos procesados este trimestre' },
      { id: 4, title: 'Conversión', value: '21.2%', description: 'Tasa de conversión trimestral' },
    ],
    salesData: [
      { month: 'Ene', ventas: 40500 },
      { month: 'Feb', ventas: 47200 },
      { month: 'Mar', ventas: 50700 },
    ],
  },
  anual: {
    label: 'Anual',
    metrics: [
      { id: 1, title: 'Ventas totales', value: 'Q 620,900', description: 'Ingresos del año actual' },
      { id: 2, title: 'Clientes activos', value: '12,840', description: 'Clientes activos del año' },
      { id: 3, title: 'Pedidos', value: '4,356', description: 'Pedidos procesados este año' },
      { id: 4, title: 'Conversión', value: '24.8%', description: 'Tasa de conversión anual' },
    ],
    salesData: [
      { month: 'Q1', ventas: 138400 },
      { month: 'Q2', ventas: 152000 },
      { month: 'Q3', ventas: 161500 },
      { month: 'Q4', ventas: 169000 },
    ],
  },
}
