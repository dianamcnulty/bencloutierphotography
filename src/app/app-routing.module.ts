import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { PeopleComponent } from './people/people.component';
import { NatureComponent } from './nature/nature.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ObjectPhotosComponent } from './object-photos/object-photos.component';
import { OtherComponent } from './other/other.component';
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
      path: 'people',
      component: PeopleComponent
    },
    {
      path: 'nature',
      component: NatureComponent
    },
    {
      path: 'architecture',
      component: ArchitectureComponent
    },
    {
      path: 'object',
      component: ObjectPhotosComponent
    },
    {
      path: 'other',
      component: OtherComponent
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
