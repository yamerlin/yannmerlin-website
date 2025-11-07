import { Routes } from '@angular/router';
import { CurriculumVitae } from './pro/curriculum-vitae/curriculum-vitae';
import { LinkedInLike } from './pro/projects/linked-in-like/linked-in-like';
import { AiChatbot } from './pro/projects/ai-chatbot/ai-chatbot';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'curriculum-vitae',
        pathMatch: 'full'
    },
    {
        path: 'curriculum-vitae',
        component: CurriculumVitae
    },
    
    // Project routes ( ex /projects/linked-in-like )
    {
        path: 'projects/linked-in-like',
        pathMatch: 'full',
        component: LinkedInLike
    },
    {
        path: 'projects/ai-chatbot',
        pathMatch: 'full',
        component: AiChatbot
    }
];
