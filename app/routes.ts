import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("levels/a1", "levels/a1/a1-modules.tsx"),
    route("levels/a1/questions/was-question-page", "levels/a1/questions/was-question-page.tsx"),
    route("levels/a1/question-words-page", "levels/a1/question-words-page.tsx"),
    route("levels/a1/questions/wer-question-page", "levels/a1/questions/wer-question-page.tsx"),
    route("levels/a1/questions/wo-question-page", "levels/a1/questions/wo-question-page.tsx"),
    route("levels/a1/questions/wann-question-page", "levels/a1/questions/wann-question-page.tsx"),
    route("levels/a1/questions/warum-question-page", "levels/a1/questions/warum-question-page.tsx"),
    route("levels/a1/questions/wie-question-page", "levels/a1/questions/wie-question-page.tsx"),
    route("levels/a1/questions/welche-question-page", "levels/a1/questions/welche-question-page.tsx"),
    route("levels/a1/verbs-page", "levels/a1/verbs-page.tsx"),

] satisfies RouteConfig;
