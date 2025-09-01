import { createRouter, createWebHistory } from "vue-router";
import BlogCreateView from "../views/BlogCreateView.vue";
import BlogsListView from "../views/BlogsListView.vue";
import BlogDetailView from "../views/BlogDetailView.vue";
import BlogUpdateView from "../views/BlogUpdateView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            //หน้ารายการบทความ
            path:'/blogs',
            name: 'BlogList',
            component: BlogsListView
        },
        {
            //สร้างหน้าจอเพิ่มบทความ
            path:'/blogs/create'	,
            name:'BlogCreate',
            component: BlogCreateView
        },
        {
            //สร้างหน้าแสดงข้อมูลบทความ
            path:'/blogs/:id',
            name:'BlogDetailView',
            component: BlogDetailView
        },
        {
           //สร้างหน้าแสดงแก้ไขบทความ
           path:'/blogs/:id/update',
           name: 'BlogUpdateView',
           component: BlogUpdateView
        }
        
    ]
})

export default router