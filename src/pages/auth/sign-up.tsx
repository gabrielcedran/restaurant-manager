import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { createRestaurant } from '@/api/create-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpFormData = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  })

  const { mutateAsync: createRestaurantAsync } = useMutation({
    mutationFn: createRestaurant,
  })

  const navigate = useNavigate()

  async function handleSignUp(data: SignUpFormData) {
    try {
      await createRestaurantAsync({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      })

      toast.success('Sign up completed successfully', {
        description: 'Please login in with the registered email.',
        action: {
          label: 'Log In',
          onClick: () => {
            navigate(`/sign-in?email=${data.email}`)
          },
        },
      })
      console.log(data)
    } catch {
      toast.error(
        'Something unexpected happened while registering. Please try again.',
      )
    }
  }

  return (
    <>
      <Helmet title="Sign Up" />
      <div className="p-8">
        <Button asChild className="absolute right-8 top-8" variant="ghost">
          <Link to="/sign-in">Already have an account?</Link>
        </Button>
        <div className="flex w-[350px] flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create a new restaurant
            </h1>
            <p className="text-sm text-muted-foreground">
              Create your account for free and improve your orders management
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Restaurant Name</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Your name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Sign up
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By signing up, you agree with our{' '}
              <a href="#" className="underline underline-offset-4">
                terms and conditions
              </a>{' '}
              and{' '}
              <a href="#" className="underline underline-offset-4">
                privacy policies
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
