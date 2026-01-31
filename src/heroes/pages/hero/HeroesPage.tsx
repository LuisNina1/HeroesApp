import { useParams } from "react-router"

export const HeroesPage = () => {
  const { idSlug = ''} = useParams()

  return (
    <div>HeroesPage</div>
  )
}
