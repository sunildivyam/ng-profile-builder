import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pba-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
})
export class RatingFormComponent implements OnInit {
  @Input() rating: number;
  @Input() isReadOnly: boolean;
  @Input() sizeClass: string;

  @Output() onChange = new EventEmitter();

  private MAX_RATING = 10;
  private MIN_RATING = 1;
  ratings: Array<number>;

  constructor() {
    this.ratings = this.generateRatings();
    this.sizeClass = "";
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  onRatingClick(event, rating) {
    if (this.isReadOnly === true) {
      return;
    }
    this.rating = rating;
    event.rating = rating;
    this.onChange.emit(event);
  }

  private generateRatings() {
    let ratings = new Array<number>();
    for (let i = this.MIN_RATING; i<=this.MAX_RATING; i++) {
      ratings.push(i);
    }
    return ratings;
  }
}
