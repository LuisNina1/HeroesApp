import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/heroe.interface";

interface FavoriteHeroContext {
  //state
  favorites: Hero[],
  favoritesCount: number,

  //Methods
  isFavorite: (hero: Hero) => boolean,
  toggleFavorite: (hero: Hero) => void
}

const getFavoritesFromLocalStorage = ():Hero[] => {
  const favorites = localStorage.getItem('favorites')
  return favorites ? JSON.parse(favorites) : []
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

  const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage())

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find(h => h.id === hero.id)
    if (heroExist) {
      const newFavorites = favorites.filter(h => h.id !== hero.id)
      setFavorites(newFavorites)
      return;
    }

    setFavorites([...favorites, hero])
  }

  const isFavorite = (hero: Hero) => {
    return favorites.some(h => h.id === hero.id)
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  return (
    <FavoriteHeroContext
      value={
        {
          favoritesCount: favorites.length,
          favorites: favorites,

          isFavorite: isFavorite,
          toggleFavorite: toggleFavorite
        }

      }>
      {children}
    </FavoriteHeroContext>
  )

}