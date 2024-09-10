import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersMetrics } from '@/api/get-month-orders-metrics'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricsCardSkeleton } from './metrics-card-skeleton'

export function MonthOrdersCard() {
  const { data: monthOrdersMetrics } = useQuery({
    queryKey: ['metrics', 'month-orders'],
    queryFn: getMonthOrdersMetrics,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Month Orders</CardTitle>
        <Utensils className="h4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrdersMetrics ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersMetrics.amount.toLocaleString('en-GB')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrdersMetrics.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthOrdersMetrics.diffFromLastMonth}%
                  </span>{' '}
                  from last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    -{monthOrdersMetrics.diffFromLastMonth}%
                  </span>{' '}
                  from last month
                </>
              )}
            </p>
          </>
        ) : (
          <MetricsCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
