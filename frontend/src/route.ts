import * as VueRouter from "vue-router";
import UserContainer from "./page/UserContainer.vue";
import BlogList from "./page/user/BlogList.vue";
import Login from "./page/backend/Login.vue";
import BlogPage from "./page/user/BlogDetail.vue";
import ErrorPage from "./page/ErrorPage.vue";
import {App} from "vue";
import CommentList from "./page/user/CommentList.vue";
import Friends from "./page/user/Friends.vue";
import BackendContainer from "./page/BackendContainer.vue";
import Summary from "./page/backend/Summary.vue";
import BlogAdmin from "./page/backend/BlogAdmin.vue";
import FriendsAdmin from "./page/backend/FriendsAdmin.vue";
import CommentAdmin from "./page/backend/CommentAdmin.vue";

export const routes = [
    {
        path: '/',
        component: UserContainer,
        children: [
            {
                path: '',
                component: BlogList,
            },
            {
                path: 'comment',
                component: CommentList,
            },
            {
                path: 'board',
                component: ErrorPage,
            },
            {
                path: 'friends',
                component: Friends,
            },
            {
                path: 'blog/:id',
                component: BlogPage
            }
        ]
    },
    {
        path: '/backend/login',
        component: Login
    },

    {
        path: '/backend',
        component: BackendContainer,
        children: [
            {
                path: 'summary',
                component: Summary,
            },
            {
                path: 'blog',
                component: BlogAdmin,
            },
            {
                path: 'comment',
                component: CommentAdmin,
            },
            {
                path: 'board',
                component: ErrorPage,
            },
            {
                path: 'friend',
                component: FriendsAdmin,
            },
        ]
    },

    {
        path: '/:pathMatch(.*)',
        component: ErrorPage
    }
]

export function initRouter(app: App<Element>) {
    const router = VueRouter.createRouter({
        // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
        history: VueRouter.createWebHistory(),
        routes, // `routes: routes` 的缩写
    })
    app.use(router)
}