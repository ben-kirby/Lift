import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PlaneComponent } from './plane/plane.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'planes',
        component: PlaneComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
