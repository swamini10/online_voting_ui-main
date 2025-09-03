import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    // { path: '', component: App },
    {path: '', loadComponent: () => import('./login/login').then(m => m.Login) }
];