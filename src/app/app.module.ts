import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './public/template/error/not-found/not-found.component';
import { InternalServerErrorComponent } from './public/template/error/internal-server-error/internal-server-error.component';
import { HeaderComponent } from './public/template/header/header.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { HomeComponent } from './public/general/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
