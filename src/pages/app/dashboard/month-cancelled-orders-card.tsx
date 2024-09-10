import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthCanceledMetrics } from '@/api/get-month-canceled-metrics'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricsCardSkeleton } from './metrics-card-skeleton'

export function MonthCancelledOrdersCard() {
  const { data: monthCanceledMetrics } = useQuery({
    queryKey: ['metrics', 'month-canceled'],
    queryFn: getMonthCanceledMetrics,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Month Cancelled Orders
        </CardTitle>
        <Utensils className="h4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledMetrics ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledMetrics.amount.toLocaleString('en-GB')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledMetrics.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-green-500 dark:text-green-400">
                    +{monthCanceledMetrics.diffFromLastMonth}%
                  </span>{' '}
                  from last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    -{monthCanceledMetrics.diffFromLastMonth}%
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
