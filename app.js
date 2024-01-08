import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const Home = { template: '<div>Home Component</div>' };
const Department = { template: '<div>Department Component</div>' };
const Employee = { template: '<div>Employee Component</div>' };

const routes = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/department',
        component: Department,
    },
    {
        path: '/employee',
        component: Employee,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp({});
app.use(router);
app.mount('#app');
