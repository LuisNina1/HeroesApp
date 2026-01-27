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

export const HomePage = () => {
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
        <Tabs value="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains">Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h1>All characters</h1>
          </TabsContent>
          <TabsContent value="favorites">
            <h1>favorites</h1>
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

        <HeroGrid></HeroGrid>

        {/* Pagination */}
        <CustomPagination totalPages={8}></CustomPagination>
      </>
    </>
  )
}
