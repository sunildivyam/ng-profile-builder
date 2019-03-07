import { Component, OnInit, Input, Injector } from '@angular/core';
import { BasicInfo } from '../../../models';

@Component({
  selector: 'pba-basic-info-view',
  templateUrl: './basic-info-view.component.html',
  styleUrls: ['./basic-info-view.component.css']
})
export class BasicInfoViewComponent implements OnInit {
  @Input() basicInfo: BasicInfo;

  constructor(private injector: Injector) {
    this.basicInfo = injector.get('basicInfo') || new BasicInfo();
  }

  ngOnInit() {
  }

}
