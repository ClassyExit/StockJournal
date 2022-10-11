import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase";

//Component layouts
import DefaultLayout from "../components/Layouts/DefaultLayout.vue";
import AuthLayout from "../components/Layouts/AuthLayout.vue";

//Views
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Auth/Home.vue";
import Watchlist from "../views/Dashboard/Watchlist.vue";
import Reset from "../views/Auth/Reset.vue";
import Profile from "../views/Dashboard/Profile.vue";

import { useUserStore } from "@/store/user";

const routes = [
  // Landing page
  {
    path: "/",
    redirect: "/home",
    name: "Home",
    component: AuthLayout,
    children: [{ path: "/home", name: "Home", component: Home }],
  },

  // Authentication pages
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    component: AuthLayout,
    children: [
      { path: "/login", name: "Login", component: Login },
      { path: "/register", name: "Register", component: Register },
      { path: "/reset", name: "Reset", component: Reset },
    ],
  },

  {
    path: "/dashboard",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      { path: "/watchlist", name: "Watchlist", component: Watchlist },
      { path: "/profile", name: "Profile", component: Profile },
    ],
  },

  // Path not found
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (
    to.path === ("/login" || "/home" || "/register") &&
    useUserStore().userId
  ) {
    next({ name: "Dashboard" });
  }
  // Check for auth for pages that require auth to access
  else if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !useUserStore().userId
  ) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
