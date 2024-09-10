import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrdersMetrics } from '@/api/get-day-orders-metrics'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricsCardSkeleton } from './metrics-card-skeleton'

export function TodayOrdersCard() {
  const { data: dayOrdersMetrics, isFetching: isLoadingTodayOrdersMetrics } =
    useQuery({
      queryKey: ['metrics', 'day-orders'],
      queryFn: getDayOrdersMetrics,
    })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Today Orders</CardTitle>
        <Utensils className="h4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrdersMetrics ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersMetrics.amount.toLocaleString('en-GB')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersMetrics.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{dayOrdersMetrics.diffFromYesterday}%
                  </span>{' '}
                  from yesterday
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    -{dayOrdersMetrics.diffFromYesterday}%
                  </span>{' '}
                  from yesterday
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
