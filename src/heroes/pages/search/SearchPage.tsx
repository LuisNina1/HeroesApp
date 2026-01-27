import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/componets/HeroStats"
import { SearchControls } from "./SearchControls"
import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs"

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre y explora"
      ></CustomJumbotron>
      <CustomBreadcrumbs
      currentPage="Buscador"
      breadcrumbs={[
        {label: 'home1', to: '/'},
        {label: 'home2', to: '/'}
      ]}
      ></CustomBreadcrumbs>
      <HeroStats></HeroStats>

      <SearchControls></SearchControls>
    </>
  )
}

export default SearchPage