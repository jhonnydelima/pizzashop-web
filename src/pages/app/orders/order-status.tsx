import { cn } from '@/lib/utils'

type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

interface OrderStatusData {
  description: string
  color: string
}

const orderStatusMap: Record<OrderStatus, OrderStatusData> = {
  pending: { description: 'Pendente', color: 'bg-slate-400' },
  canceled: { description: 'Cancelado', color: 'bg-rose-500' },
  processing: { description: 'Em preparo', color: 'bg-amber-500' },
  delivering: { description: 'Em entrega', color: 'bg-amber-500' },
  delivered: { description: 'Entregue', color: 'bg-emerald-500' },
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn('h-2 w-2 rounded-full', orderStatusMap[status].color)}
      />

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status].description}
      </span>
    </div>
  )
}
