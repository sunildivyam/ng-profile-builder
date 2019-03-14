import { Component, Injector, Input, OnChanges } from '@angular/core';
import { BasicInfo, Employer } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-profile-header',
  templateUrl: './profile-header-view.component.html',
  styleUrls: ['./profile-header-view.component.scss']
})
export class ProfileHeaderViewComponent implements OnChanges {
  @Input() basicInfo: Array<BasicInfo>;
  @Input() employers: Array<Employer>;

  viewData: any;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.basicInfo = this.injector.get('basicInfo') || new BasicInfo();
    this.employers = this.injector.get('employers') || new Array<Employer>();

    this.transformData();
  }

  transformData() {
    this.viewData = { ...this.basicInfo };
    this.viewData.presentEmployer = <Employer>this.profileViewService.getPresentEmployer(this.employers);
  }

  ngOnChanges() {
    this.transformData();
  }
}
