import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  {
    date: '30/10',
    revenue: 1100,
  },
  {
    date: '29/10',
    revenue: 2200,
  },
  {
    date: '28/10',
    revenue: 800,
  },
  {
    date: '27/10',
    revenue: 0,
  },
  {
    date: '26/10',
    revenue: 1800,
  },
  {
    date: '25/10',
    revenue: 1600,
  },
  {
    date: '24/10',
    revenue: 1202,
  },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Turnover in the period
          </CardTitle>
          <CardDescription>Daily Turnover </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                })
              }
            />
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
