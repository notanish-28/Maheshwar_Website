import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutArtisansComponent } from './component/pages/about-artisans/about-artisans.component';
import { AboutMaheshwariComponent } from './component/pages/about-maheshwari/about-maheshwari.component';
import { ShopComponent } from './component/pages/shop/shop.component';
import { ContactComponent } from './component/pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-artisans', component: AboutArtisansComponent },
  { path: 'about-maheshwari', component: AboutMaheshwariComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
