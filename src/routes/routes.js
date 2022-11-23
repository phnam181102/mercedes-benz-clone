// Layouts
// import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';

// Pages
import Home from '~/pages/Home/Home';
import Login from '~/pages/Auth/Login/Login';
import Register from '~/pages/Auth/Register/Register';
import StoredCars from '~/pages/AdminPanel/StoredCars/StoredCars';
import Create from '~/pages/AdminPanel/Create/Create';
import Edit from '~/pages/AdminPanel/Edit/Edit';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    // { path: '/detail/:id', component: Detail, layout: HeaderOnly },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/adminpanel', component: StoredCars, layout: null },
    { path: '/adminpanel/create', component: Create, layout: null },
    { path: '/adminpanel/edit/:slug', component: Edit, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
