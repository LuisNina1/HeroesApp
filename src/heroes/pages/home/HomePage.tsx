import {
  Filter,
  Heart,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/componets/HeroStats"
import { HeroGrid } from "@/heroes/componets/HeroGrid"
import { CustomPagination } from "@/components/ui/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/ui/custom/CustomBreadcrumbs"
import { useSearchParams } from "react-router"
import { use, useMemo } from "react"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginateHero } from "@/heroes/hooks/usePaginateHero"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"

export const HomePage = () => {
  const {favorites, favoritesCount} = use(FavoriteHeroContext)

  const [searchParams, setSearchParams] = useSearchParams()

  const activeTab = searchParams.get('tab') ?? 'all'
  const page = searchParams.get('page')  ?? '1'
  const limit = searchParams.get('limit') ?? '6'
  const category = searchParams.get('category') ?? 'all'

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains']
    return validTabs.includes(activeTab) ? activeTab : 'all'
  }, [activeTab])

  const { data: heroesResponse } = usePaginateHero(page,limit,category)

  const { data: summaryResponse} = useHeroSummary()
  

  console.log(heroesResponse)

  return (
    <>
      <>
        {/* HEADER*/}
        <CustomJumbotron
          title="Universo de SuperHeroes"
          description="Descubre y explora"
        ></CustomJumbotron>


        <CustomBreadcrumbs
          currentPage="home"
        ></CustomBreadcrumbs>
        {/* Stats Dashboard */}

        <HeroStats></HeroStats>

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'all')
              prev.set('category', 'all')
              prev.set('page', '1')
              return prev
            })}
            >All Characters ({summaryResponse?.totalHeroes})</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'favorites')
                return prev
              })}
            >
              <Heart className="h-4 w-4" />
              Favorites ({favoritesCount})
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'heroes')
              prev.set('category', 'hero')
              prev.set('page', '1')
              return prev
            })}
            >Heroes ({summaryResponse?.heroCount})</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => {
              prev.set('tab', 'villains')
              prev.set('category', 'villain')
              prev.set('page', '1')
              return prev
            })}>Villains ({summaryResponse?.villainCount})</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h1>All characters</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []}></HeroGrid>
          </TabsContent>
          <TabsContent value="favorites">
            <h1>All characters</h1>
            <HeroGrid heroes={favorites}></HeroGrid>
          </TabsContent>
          <TabsContent value="heroes">
            <h1>favorites</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []}></HeroGrid>
          </TabsContent>
          <TabsContent value="villains">
            <h1>favorites</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []}></HeroGrid>
          </TabsContent>
        </Tabs>

        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div>



        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 1}></CustomPagination>
      </>
    </>
  )
}
