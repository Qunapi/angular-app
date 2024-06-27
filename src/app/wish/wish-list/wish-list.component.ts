import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WishListItemComponent } from '../wish-list-item/wish-list-item.component';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [WishListItemComponent, NgIf, NgFor],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
}
