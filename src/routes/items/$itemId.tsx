import { Item } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items/$itemId')({
  component: Item,
})
