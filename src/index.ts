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
      },{
        path: "howtos",
        component: "howtos-page",
        action: async () => {
          await import("./pages/howtos-page.ts");
        },
      },
    ],
  },
];

const router = new Router(document.querySelector("#app"));
router.setRoutes(routes);
