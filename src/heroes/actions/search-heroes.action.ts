import { heroApi } from "../api/hero.api"
import type { Hero } from "../types/heroe.interface"

const BASE_URL = import.meta.env.VITE_API_URL;


interface Options {
  name?: string,
  team?: string,
  category?: string,
  universe?: string,
  status?: string,
  strength?: string

}
export const searchHeroesAction = async (option: Options = {}) => {
  const {name,category,status,strength,team,universe} = option
  
  if(!name && !team && !category && !universe && !status && ! strength){
    return []
  }
  const { data } = await heroApi.get<Hero[]>(`/search`, {
    params: {
      name,
      team,
      category,
      universe,
      status,
      strength
    }
  })

  return data.map(hero => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`
  }))
  
}