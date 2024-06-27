import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../shared/services/EventService';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  // @Input() fulfilled: boolean = false;
  // @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    return {
      'text-muted strikeout': this.wish.isComplete,
    };
  }

  constructor(private events: EventService) {}

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
    // this.fulfilledChange.emit(this.wish.isComplete);
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }
}
