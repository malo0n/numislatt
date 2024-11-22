import RootLayout from '@/shared/ui/RootLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout')({
  component: RootLayout,
})
