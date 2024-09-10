import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthTurnoverMetrics } from '@/api/get-month-turnover-metrics'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricsCardSkeleton } from './metrics-card-skeleton'

export function MonthRevenueCard() {
  const { data: monthTurnoverMetrics } = useQuery({
    queryKey: ['metrics', 'month-turnover'],
    queryFn: getMonthTurnoverMetrics,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Month Revenue</CardTitle>
        <DollarSign className="h4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthTurnoverMetrics ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthTurnoverMetrics.receipt / 100).toLocaleString('en-GB', {
                style: 'currency',
                currency: 'GBP',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthTurnoverMetrics.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthTurnoverMetrics.diffFromLastMonth}%
                  </span>{' '}
                  from last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    -{monthTurnoverMetrics.diffFromLastMonth}%
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
