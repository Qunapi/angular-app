import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from './shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => item.isComplete === false,
  (item: WishItem) => item.isComplete === true,
] as const;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app22222222';
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Random'),
  ];

  listFilter: '0' | '1' | '2' = '0';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
}
