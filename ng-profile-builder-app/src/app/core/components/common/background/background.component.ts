import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'pba-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, OnChanges {
  @Input() bgColor: string;
  @Input() bgImageUrl: string;
  @Input() topSpacing: string;
  @Input() bottomSpacing: string;
  imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.imageUrl = `url('${this.bgImageUrl}')`;
  }

}
