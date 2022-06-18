import { createRouter, createWebHistory } from "vue-router";
import { auth, isAuthenticated } from "../firebase";

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

  // Dashboard
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

router.beforeEach((to, from, next) => {
  // If logged in, push to dashboard
  if ((to.path === "/login" || to.path === "/register") && auth.currentUser) {
    next({ name: "Dashboard" });
  }
  // Requires auth, check if logged in
  else if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next({ path: "/auth" });
  } else {
    next();
  }
});

export default router;
