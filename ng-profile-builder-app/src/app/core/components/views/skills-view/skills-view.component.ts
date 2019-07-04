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
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.skills = this.injector.get('skills', new Array<Skill>());
    this.transformData();
  }

  transformData() {
    this.viewData = new Array<any>();
    this.skills && this.skills.map((skillItem: Skill) => {
      const item = { ...skillItem, experience: this.profileViewService.getDuration(skillItem.from, skillItem.to).toString() };
      this.viewData.push(item);
    });
  }

  ngOnChanges() {
    this.transformData();
  }
}
