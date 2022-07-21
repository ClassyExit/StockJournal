import {
  createRouter,
  createWebHistory,
  useRoute,
  useRouter,
} from "vue-router";
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
  const userStore = useUserStore();
  userStore.lastURL = router.currentRoute.value.fullPath;

  if (
    (to.name === "Login" || to.name === "Register" || to.name === "Home") &&
    auth.currentUser
  ) {
    next({ name: "Dashboard" });
  }
  // Check for auth for pages that require auth to access
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
