import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("levels/a1", "levels/a1/a1page.tsx"),

] satisfies RouteConfig;
