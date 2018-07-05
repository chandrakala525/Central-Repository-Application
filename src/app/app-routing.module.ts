import { EquityanalysismissingComponent } from './equityanalysismissing/equityanalysismissing.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: { title: 'Central Repository Login' } },
    {
      path: 'repository', component: MainPageComponent, pathMatch: 'prefix',
      children: [
        { path: 'home', component: HomeComponent, data:{ title: 'Central Repository Home' } },
        { path: 'equity-analysis', component: EquityanalysismissingComponent, data:{ title: 'Central Repository Equity Analysis' } }
      ]
    },
  ];
  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
  })

  export class AppRoutingModule{
      
  }