import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { PopularCardComponent } from './popular-card/popular-card.component';
import { NavbarComponent } from './layout/navbar.component';
import { RateChartComponent } from './rate-chart/rate-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    PopularCardComponent,
    NavbarComponent,
    RateChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
