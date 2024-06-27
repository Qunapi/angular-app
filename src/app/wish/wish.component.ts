import { Component } from '@angular/core';
import { EventService } from '../shared/services/EventService';
import { WishItem } from '../shared/models/wishItem';
import { WishService } from './wish.service';
import { CommonModule } from '@angular/common';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    CommonModule,
    AddWishFormComponent,
    WishComponent,
    WishFilterComponent,
    WishListComponent,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent {
  items: WishItem[] = [];

  constructor(private events: EventService, private wishService: WishService) {
    this.events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert('Error: ' + error.message);
      }
    );
  }

  filter: any;
}
