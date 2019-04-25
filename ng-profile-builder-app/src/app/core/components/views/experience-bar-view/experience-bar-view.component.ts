import { Component, OnChanges, Input, Injector } from '@angular/core';
import { Employer } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-experience-bar-view',
  templateUrl: './experience-bar-view.component.html',
  styleUrls: ['./experience-bar-view.component.scss']
})
export class ExperienceBarViewComponent implements OnChanges {
  @Input() employers: Array<Employer>;
  viewData = {
    relevantExperience: '0',
    totalExperience: '0'
  };

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.employers = this.injector.get('employers') || new Array<Employer>();
    this.transformData();
  }

  transformData() {    
    this.viewData.relevantExperience = this.profileViewService.getRelevantExperience(this.employers).toString();
    this.viewData.totalExperience = this.profileViewService.getTotalExperience(this.employers).toString();
  }

  ngOnChanges() {
    this.transformData();
  }
}
