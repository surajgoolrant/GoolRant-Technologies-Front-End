import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { ItservicesComponent } from './components/itservices/itservices.component';
import { SubitservicesComponent } from './components/itservices/subitservices/subitservices.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'itservices', component: ItservicesComponent },
  { path: 'itservices/:subservice', component: SubitservicesComponent },
  { path: 'contact', component: ContactusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
