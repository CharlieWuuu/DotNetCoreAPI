import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DepartmentView from '../views/DepartmentView.vue';
import EmployeeView from '../views/EmployeeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/department',
        name: 'department',
        component: DepartmentView,
    },
    {
        path: '/employee',
        name: 'employee',
        component: EmployeeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
