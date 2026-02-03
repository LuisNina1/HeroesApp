import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/componets/HeroStats"
import { SearchControls } from "./SearchControls"
import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action"
import { HeroGrid } from "@/heroes/componets/HeroGrid"

export const SearchPage = () => {
  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? ''
  const strength = searchParams.get('strength') ?? ''
  const { data = []} = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroesAction({name, strength}),
    staleTime: 1000 * 60 *5
  })


  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre y explora"
      ></CustomJumbotron>

      <CustomBreadcrumbs
        currentPage="Buscador"
        breadcrumbs={[
          { label: 'home1', to: '/' },
          { label: 'home2', to: '/' }
        ]}
      ></CustomBreadcrumbs>

      <HeroStats></HeroStats>

      <SearchControls></SearchControls>
      <HeroGrid heroes={data}></HeroGrid>
    </>
  )
}

export default SearchPage