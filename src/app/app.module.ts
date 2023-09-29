import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChangeImageService } from './change-image.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CustompipePipe } from './custompipe.pipe';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
    SignUpComponent,
    DetailComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    CarouselModule,
  ],
  providers: [ChangeImageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
