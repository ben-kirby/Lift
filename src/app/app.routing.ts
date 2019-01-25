import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
