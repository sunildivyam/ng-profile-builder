import { Component, OnChanges, Input, Injector } from '@angular/core';
import { Employer } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-projects-small-view',
  templateUrl: './projects-small-view.component.html',
  styleUrls: ['./projects-small-view.component.scss']
})
export class ProjectsSmallViewComponent implements OnChanges {
  @Input() projects: Array<Employer>;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.projects = this.injector.get('projects', new Array<Employer>());
    this.transformData();
  }

  transformData(): void {
    this.viewData = new Array<any>();
    this.projects && this.projects.map((projItem: Employer) => {
      const item = { ...projItem, duration: this.profileViewService.getDuration(projItem.from, projItem.to).toString() };
      this.viewData.push(item);
    });
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
