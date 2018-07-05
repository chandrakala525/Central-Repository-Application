import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/Http';
import { Form, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EquityanalysismissingComponent } from './equityanalysismissing/equityanalysismissing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';

import { EquityAnalysisMissingService } from './equity-analysis-missing.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EquityanalysismissingComponent,
    NavBarComponent,
    MainPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EquityAnalysisMissingService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
