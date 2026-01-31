import { useQuery } from "@tanstack/react-query"
import { getHeroesByPage } from "../actions/get-heroes-by-pages.actions"

export const usePaginateHero = (page: string, limit: string, category = 'all') => {
  return useQuery({
    queryKey: ['heroes', { page: page, limit: limit , category}],
    queryFn: () => getHeroesByPage(+page, +limit, category),
    staleTime: 1000 * 60 * 5
  })
}