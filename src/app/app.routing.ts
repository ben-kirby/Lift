import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import { PlaneComponent } from './plane/plane.component';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "planes",
        component: PlaneComponent
    },
    {
        path: "guest",
        component: GuestComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
