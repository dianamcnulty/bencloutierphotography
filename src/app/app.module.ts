import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NatureComponent } from './nature/nature.component';
import { PeopleComponent } from './people/people.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ObjectPhotosComponent } from './object-photos/object-photos.component';
import { OtherComponent } from './other/other.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent,
    NatureComponent,
    PeopleComponent,
    ArchitectureComponent,
    ObjectPhotosComponent,
    OtherComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
