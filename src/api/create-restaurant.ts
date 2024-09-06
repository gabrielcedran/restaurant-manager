import { api } from '@/lib/axios'

export interface CreateRestaurantRequest {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function createRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: CreateRestaurantRequest) {
  await api.post('/restaurants', { restaurantName, managerName, email, phone })
}
