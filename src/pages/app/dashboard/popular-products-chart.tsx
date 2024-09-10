import { useQuery } from '@tanstack/react-query'
import { BarChart, Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { getPopularProductsMetrics } from '@/api/get-popular-products'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const COLOUR = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export function PopularProductsChart() {
  const { data: popularProductsMetrics } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProductsMetrics,
  })

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Popular Products
          </CardTitle>
          <CardDescription>
            <BarChart className="h-4 w-4 text-muted-foreground" />{' '}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {popularProductsMetrics ? (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={popularProductsMetrics}
                dataKey="amount"
                nameKey="product"
                cx="50%"
                cy="50%"
                outerRadius={86} // this creates doughnut chart
                innerRadius={64} // this creates doughnut chart
                strokeWidth={8}
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180
                  const radius = 12 + innerRadius + (outerRadius - innerRadius)
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      x={x}
                      y={y}
                      className="fill-muted-foreground text-xs"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {popularProductsMetrics[index].product.length > 12
                        ? popularProductsMetrics[index].product
                            .substring(0, 12)
                            .concat('...')
                        : popularProductsMetrics[index].product}{' '}
                      ({value})
                    </text>
                  )
                }}
              >
                {popularProductsMetrics.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLOUR[index]}
                    className="stroke-background hover:opacity-80"
                  /> // this is how different colours can be applied for each slice, otherwise all slices would have the same colour
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
