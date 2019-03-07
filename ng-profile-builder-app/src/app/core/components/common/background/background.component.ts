import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pba-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  @Input() bgColor: string;
  @Input() bgImageUrl: string;
  @Input() topSpacing: string;
  @Input() bottomSpacing: string;

  constructor() { }

  ngOnInit() {
  }

}
