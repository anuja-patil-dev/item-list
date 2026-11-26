
import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Login } from './component/login/login';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';
import { Itemlist } from './component/itemlist/itemlist';
import { Api } from './component/api/api';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    },
    {path:'items',
        component:Api
    }
];
