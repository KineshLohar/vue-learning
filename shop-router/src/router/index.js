import AboutView from "@/views/AboutView.vue";
import AdminView from "@/views/AdminView.vue";
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import View404 from "@/views/View404.vue";
import { createRouter, createWebHistory } from "vue-router";

let isLoggedIn = false;
function makeLogin() { isLoggedIn = true }

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: "/",
            component: HomeView,
            // children: [
            //     {
            //         name : "",
            //         component: HomeView
            //     }
            // ]
        },
        {
            name: 'about',
            path: "/about",
            component: AboutView
        },
        {
            name: "product",
            path: "/product/:id",
            component: ProductDetails
        },
        {
            name: "Not Found",
            path: '/:pathMatch(.*)*',
            component: View404
        },
        {
            name: 'login',
            path: "/login",
            component: LoginView
        },
        {
            name: "admin",
            path: "/admin",
            component: AdminView,
            meta: {
                requireAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !isLoggedIn) {
        alert("login required to access this page");
        next({
            name: 'login'
        })
        return
    } else {
        next()
    }
})

export { isLoggedIn, makeLogin }

export default router;