import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NewTiketComponent } from './pages/new-tiket/new-tiket.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { GridTicketsComponent } from './pages/home/components/grid-tickets/grid-tickets.component';
import { DxDataGridModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { MenuSidenavTicketsComponent } from './pages/home/components/menu-sidenav-tickets/menu-sidenav-tickets.component';
import { SlideOverComponent } from './pages/home/components/slide-over/slide-over.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewTiketComponent,
    PageNotFoundComponent,
    MenuComponent,
    GridTicketsComponent,
    MenuSidenavTicketsComponent,
    SlideOverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
