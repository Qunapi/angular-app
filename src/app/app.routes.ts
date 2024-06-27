import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products/:id', component: ProductdetailsComponent },
  { path: 'products', component: ProductsListComponent },
  { path: '**', component: NotFoundComponent },
];
