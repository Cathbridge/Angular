import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router';
import { ViewComponent } from './components/view/view.component'
import { AppRoutes } from '../app.routes.module';
import { EventComponent } from './components/event/event.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ViewComponent,
    EventComponent,
    DetailPageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
