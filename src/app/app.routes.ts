import { Routes } from '@angular/router';
import { Home } from './layout/home/home/home';
import { Galery } from './layout/galery/galery/galery';

export const routes: Routes = [
     {
        path: 'home',
        component: Home
    },
    {
        path: 'image-gallery',
        component: Galery,
    },
    // {
    //     path: 'explorer',
    //     component: NodeThree,
    // },
    // {
    //     path: 'calendar',
    //     component: NodeFour,
    // },
    // {
    //     path: 'simulator',
    //     component: NodeFive,
    // },
    {
        path: '**',
        redirectTo: 'home'
    }
];
