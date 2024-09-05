import { BarChart } from 'lucide-react'
import {
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
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
    product: 'Pepperoni Pizza',
    quantity: 19,
  },
  {
    product: 'Mozzarella Pizza',
    quantity: 10,
  },
  {
    product: 'Chicken Rice Bowl',
    quantity: 1,
  },
  {
    product: 'Garlic Bread',
    quantity: 4,
  },
  {
    product: 'Margherita',
    quantity: 5,
  },
]

const COLOUR = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export function PopularProductsChart() {
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
        <ResponsiveContainer width="100%" height={240}>
          <PieChart data={data} style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="quantity"
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
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLOUR[index]}
                  className="stroke-background hover:opacity-80"
                /> // this is how different colours can be applied for each slice, otherwise all slices would have the same colour
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}