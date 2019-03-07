import { Component, Input } from '@angular/core';

@Component({
  selector: 'pba-rating-view',
  templateUrl: './rating-view.component.html',
  styleUrls: ['./rating-view.component.css']
})
export class RatingViewComponent {
  @Input() rating: number;
  @Input() sizeClass: string;

  private MAX_RATING = 10;
  private MIN_RATING = 1;
  ratings: Array<number>;

  constructor() {
    this.ratings = this.generateRatings();
    this.sizeClass = '';
  }

  private generateRatings() {
    const ratings = new Array<number>();
    for (let i = this.MIN_RATING; i <= this.MAX_RATING; i++) {
      ratings.push(i);
    }
    return ratings;
  }
}
