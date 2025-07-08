import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("levels/a1", "levels/a1/a1page.tsx"),
    route("levels/a1/questions/was-question-page", "levels/a1/questions/was-question-page.tsx"),

] satisfies RouteConfig;
