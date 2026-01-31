import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { HeroesPage } from "@/heroes/pages/hero/HeroesPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'))
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'))

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout></HeroesLayout>,
    children: [
      {
        index:true,
        element: <HomePage></HomePage>
      },
      {
        path: 'heroes/:idSlug',
        element: <HeroesPage></HeroesPage>
      },
      {
        path: 'search',
        element: <SearchPage></SearchPage>
      },
      {
        path: '*',
        element: <Navigate to="/"></Navigate>
      }

    ]
  },
  {
    path: '/admin',
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <AdminPage></AdminPage>
      }
    ]
  }
  
])