import RootLayout from '@/shared/ui/layouts/RootLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RootLayout,
})
