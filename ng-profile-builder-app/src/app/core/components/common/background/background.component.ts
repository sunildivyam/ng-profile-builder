import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pba-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnChanges {
  @Input() bgColor: string;
  @Input() bgImageUrl: string;
  @Input() topSpacing: string;
  @Input() bottomSpacing: string;
  imageUrl: string;

  ngOnChanges(): void {
    if (this.bgImageUrl) {
      this.imageUrl = `url('${this.bgImageUrl}')`;
    } else {
      this.imageUrl = '';
    }
  }
}
