import { Router, Route } from "@vaadin/router";
import "./my-app.ts";

const routes: Route[] = [
  {
    path: "/",
    component: "my-app",
    children: [
      {
        path: "",
        component: "home-page",
        action: async () => {
          await import("./pages/home-page.ts");
        },
      },
      {
        path: "tools",
        component: "tools-page",
        action: async () => {
          await import("./pages/tools-page.ts");
        },
      },
      {
        path: "chucknorris",
        component: "chucknorris-page",
        action: async () => {
          await import("./pages/chucknorris-page.ts");
        },
      },
      {
        path: "pacman",
        component: "pacman-page",
        action: async () => {
          await import("./pages/pacman-page.ts");
        },
      },
    ],
  },
];

const router = new Router(document.querySelector("#app"));
router.setRoutes(routes);
