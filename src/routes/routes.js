// Layouts
// import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';

// Pages
import Detail from '~/pages/Detail/Detail';
import Home from '~/pages/Home/Home';
import Login from '~/pages/LoginRegister/Login/Login';
import Register from '~/pages/LoginRegister/Register/Register';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    // { path: '/detail/:id', component: Detail, layout: HeaderOnly },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/detail', component: Detail, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
