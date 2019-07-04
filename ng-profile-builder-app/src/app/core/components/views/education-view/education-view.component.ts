import { Component, OnChanges, Input, Injector } from '@angular/core';
import { Education } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-education-view',
  templateUrl: './education-view.component.html',
  styleUrls: ['./education-view.component.css']
})
export class EducationViewComponent implements OnChanges {
  @Input() education: Array<Education>;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.education = this.injector.get('education', new Array<Education>());
    this.transformData();
  }

  transformData() {
    this.viewData = new Array<any>();
    this.education && this.education.map((eduItem: Education) => {
      const item = { ...eduItem, duration: this.profileViewService.getDuration(eduItem.from, eduItem.to).toString() };
      this.viewData.push(item);
    });
  }

  ngOnChanges() {
    this.transformData();
  }
}
