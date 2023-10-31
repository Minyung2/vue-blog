import { createWebHistory, createRouter } from "vue-router";
import Post from "@/components/Post.vue";
import Main from "@/components/Main.vue";
import Detail from "@/components/Detail.vue";
import Author from "@/components/Author.vue";
import postComment from "@/components/Comment.vue";

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
        component: Detail,
        // nested router
        children:[
            {
                path:"author",
                component: Author
            },
            {
                path:"comment",
                component: postComment
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;