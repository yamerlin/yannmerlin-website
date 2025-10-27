import { Routes } from '@angular/router';
import { CurriculumVitae } from './pro/curriculum-vitae/curriculum-vitae';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'curriculum-vitae',
        pathMatch: 'full'
    },
    {
        path: 'curriculum-vitae',
        component: CurriculumVitae
    }
];
