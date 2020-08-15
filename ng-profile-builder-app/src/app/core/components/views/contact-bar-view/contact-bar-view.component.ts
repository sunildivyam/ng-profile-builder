import { Component, OnChanges, Input, Injector } from '@angular/core';
import { BasicInfo } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-contact-bar-view',
  templateUrl: './contact-bar-view.component.html',
  styleUrls: ['./contact-bar-view.component.scss']
})
export class ContactBarViewComponent implements OnChanges {
  @Input() basicInfo: BasicInfo;
  viewData: any;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.basicInfo = this.injector.get('basicInfo', new BasicInfo());
    this.transformData();
  }

  transformData(): void {
    this.viewData = {...this.basicInfo};
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
