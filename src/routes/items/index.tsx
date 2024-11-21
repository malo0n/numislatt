import { ItemsList } from '@/pages/items'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items/')({
  component: ItemsList,
})