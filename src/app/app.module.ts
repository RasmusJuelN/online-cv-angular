import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    HomeComponent,
    AboutCardComponent,
    ProjectCardComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
