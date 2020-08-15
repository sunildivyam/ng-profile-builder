import { Component, OnChanges, Input, Injector } from '@angular/core';
import { Employer } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-projects-medium-view',
  templateUrl: './projects-medium-view.component.html',
  styleUrls: ['./projects-medium-view.component.scss']
})
export class ProjectsMediumViewComponent implements OnChanges {
  @Input() projects: Array<Employer>;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.projects = this.injector.get('projects', new Array<Employer>());
    this.transformData();
  }

  transformData(): void {
    this.viewData = new Array<any>();
    if (this.projects && this.projects.length) {
      this.projects.map((projItem: Employer) => {
        const item = { ...projItem, duration: this.profileViewService.getDuration(projItem.from, projItem.to).toString() };
        this.viewData.push(item);
      });
    }
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
