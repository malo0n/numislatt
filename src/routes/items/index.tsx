import { ItemsList } from '@/pages/items'
import { AllItemsFilters, continents } from '@/pages/items/model/types'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items/')({
  component: ItemsList,
  validateSearch: (search: Record<string, unknown>):AllItemsFilters => {
    return {
      ...search,
      continent: search.continent ? (search.continent as continents) : undefined,
      

    }
  },
})