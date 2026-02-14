import { Routes } from '@angular/router';
import { Valentin } from './valentin/valentin';
import { Razones } from './razones/razones';

export const routes: Routes = [
    { path: '', component: Valentin },
    { path: 'razones', component: Razones },
];
