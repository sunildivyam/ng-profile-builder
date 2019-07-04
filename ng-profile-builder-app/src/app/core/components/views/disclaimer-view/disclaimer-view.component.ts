import { Component, OnChanges, Input, Injector } from '@angular/core';
import { BasicInfo } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-disclaimer-view',
  templateUrl: './disclaimer-view.component.html',
  styleUrls: ['./disclaimer-view.component.scss']
})
export class DisclaimerViewComponent implements OnChanges {
  @Input() basicInfo: BasicInfo;
  viewData: any;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.basicInfo = this.injector.get('basicInfo', new BasicInfo());
    this.transformData();
  }

  transformData() {
    this.viewData = { ...this.basicInfo };
  }

  ngOnChanges() {
    this.transformData();
  }
}
