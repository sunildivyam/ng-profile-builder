import { Component, OnChanges, Input, Output, EventEmitter, Injector } from '@angular/core';
import { ProfileViewService } from '../../../services';
import {Project} from '../../../models';


@Component({
  selector: 'pba-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss']
})
export class ProjectsViewComponent implements OnChanges {
  @Input() projects: Array<Project>;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.projects = this.injector.get('projects', new Array<Project>());
    this.transformData();
  }

  transformData(): void {
    this.viewData = new Array<any>();
    if (this.projects && this.projects.length) {
      this.projects.map((projItem: Project) => {
        const item = {...projItem, duration: this.profileViewService.getDuration(projItem.from, projItem.to).toString() };
        this.viewData.push(item);
      });
    }
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
