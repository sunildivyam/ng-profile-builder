import { Component, OnChanges, Input, Injector } from '@angular/core';
import { Skill } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-skills-view',
  templateUrl: './skills-view.component.html',
  styleUrls: ['./skills-view.component.scss']
})
export class SkillsViewComponent implements OnChanges {
  @Input() skills: Array<Skill>;
  @Input() sortBy = '';  // 'rating'
  @Input() sortAsc = false;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.skills = this.injector.get('skills', new Array<Skill>());
    this.transformData();
  }

  transformData(): void {
    this.viewData = new Array<any>();
    if (this.skills && this.skills.length) {
      this.skills.map((skillItem: Skill) => {
        const item = { ...skillItem,
          experience: this.profileViewService.getDuration(skillItem.from, skillItem.to, true),
          experienceLabel: this.profileViewService.getDuration(skillItem.from, skillItem.to, true).toString()};
        this.viewData.push(item);
      });
    }
    this.viewData = this.sortSkills(this.viewData, this.sortBy, this.sortAsc);
  }

  sortSkills(data: Array<any>, sortBy: string = '', sortAsc = true): Array<any> {
    if (sortBy === 'rating' || sortBy === 'experience') {
      data.sort((a, b) => {
        if (sortAsc) {
          return a[sortBy] - b[sortBy];
        } else {
          return b[sortBy] - a[sortBy];
        }
      });
    }
    return data;
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
