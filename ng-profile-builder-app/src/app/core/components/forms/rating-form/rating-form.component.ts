import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pba-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent {
  @Input() rating: number;
  @Input() isReadOnly: boolean;
  @Input() sizeClass: string;

  @Output() changed = new EventEmitter();

  private MAX_RATING = 10;
  private MIN_RATING = 1;
  ratings: Array<number>;

  constructor() {
    this.ratings = this.generateRatings();
    this.sizeClass = '';
  }

  onRatingClick(event, rating): void {
    if (this.isReadOnly === true) {
      return;
    }
    this.rating = rating;
    event.rating = rating;
    this.changed.emit(event);
  }

  private generateRatings(): Array<number> {
    const ratings = new Array<number>();
    for (let i = this.MIN_RATING; i <= this.MAX_RATING; i++) {
      ratings.push(i);
    }
    return ratings;
  }
}
