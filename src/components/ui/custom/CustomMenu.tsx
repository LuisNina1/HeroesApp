import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@radix-ui/react-navigation-menu"
import { NavigationMenuLink } from "../navigation-menu"
import { Link } from "react-router"

export const CustomMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="bg-slate-200 rounded-md p-2"
            asChild>
            <Link to='/'>Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className="bg-slate-200 rounded-md p-2"
            asChild>
            <Link to='/search'>Busqueda</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}