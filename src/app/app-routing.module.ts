import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: '',
      component: WelcomeComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
