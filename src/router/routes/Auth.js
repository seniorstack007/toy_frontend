import { lazy } from 'react'

const AuthRoutes = [
    {
        path: '/login',
        component: lazy(() => import('../../views/auth/Login')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/register',
        component: lazy(() => import('../../views/auth/Register')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/error',
        component: lazy(() => import('../../views/Error')),
        layout: 'BlankLayout'
    }
]

export default AuthRoutes
