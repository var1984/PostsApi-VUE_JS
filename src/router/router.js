import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../components/Posts'
import PostPage from '../components/PostPage'
import AddPost from '../components/AddPost'
import AllUsers from "../components/Users";
Vue.use(VueRouter)

let  router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Posts,
            
        },
        {
            path: '/posts/',
            name: 'posts',
            component: Posts,
            
        },
        {
            path:'/post/:id',
            name: 'postPage',
            component: PostPage,
            props: true
        },
        {
            path:'/createpost',
            name: 'addPost',
            component: AddPost,
        },
         {
            path:'/users',
            name: 'Users',
            component: AllUsers,
        }
    ]
})

export default router;