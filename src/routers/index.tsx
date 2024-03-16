import React from 'react'
import type { RouteObject } from 'react-router-dom'

type ConfigureType = {
  verifToken?: boolean
  title?: string
  role: Array<'user' | 'administrator' | string>
}

export interface RouteOptions extends Omit<Omit<RouteObject, 'children'>, 'index'> {
  index?: boolean
  children?: RouteOptions[]
  configure?: ConfigureType
}

// const ChatPage = React.lazy(() => import('@/pages/chat'))


export const webRouter: RouteOptions[] = [
  // {
  //   id: 'ChatPage',
  //   path: '/',
  //   element: <ChatPage />,
  // },
]

export function searchRouteDetail(path: string, routes: RouteOptions[]): RouteOptions | null {
  let detail = null
  const forRouter = (path: string, routes: RouteOptions[]) => {
    for (const item of routes) {
      if (item.path === path) {
        detail = item
      }
      if (item.children && item.children.length > 0) {
        forRouter(path, item.children)
      }
    }
  }

  forRouter(path, routes)

  return detail
}

export default {}
