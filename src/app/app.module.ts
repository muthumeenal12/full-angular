import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactItemComponent } from './pages/contacts/contact-item/contact-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceCardComponent } from './pages/home/service-card/service-card.component';
import { ProjectCardComponent } from './pages/projects/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactsComponent,
    MenuBarComponent,
    ContactItemComponent,
    ServiceCardComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
