// interface OrderDetailsProps {}

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: 1234</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Client</TableCell>
              <TableCell className="flex justify-end">Don Bob</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Phone</TableCell>
              <TableCell className="flex justify-end">0740446776</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">e-mail</TableCell>
              <TableCell className="flex justify-end">don@bob.com</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Order Placed
              </TableCell>
              <TableCell className="flex justify-end">15 minutes ago</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pepperoni Pizza XL</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">£ 23.40</TableCell>
              <TableCell className="text-right">£ 46.80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Margherita MD</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">£ 13.40</TableCell>
              <TableCell className="text-right">£ 13.40</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Order Total</TableCell>
              <TableCell className="text-right font-medium">£ 60.20</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
