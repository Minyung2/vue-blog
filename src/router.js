import { createWebHistory, createRouter } from "vue-router";
import Post from "@/components/Post.vue";
import Main from "@/components/Main.vue";
import Detail from "@/components/Detail.vue";

const routes = [
    {
        path: "/list",
        component: Post,
    },
    {
        path: "/",
        component: Main
    },
    {
        path: "/detail/:id",
        component: Detail
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;