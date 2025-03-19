import { Component, OnChanges, Input, Injector } from '@angular/core';
import { Skill } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-primary-skills-modern-view',
  templateUrl: './primary-skills-modern-view.component.html',
  styleUrls: ['./primary-skills-modern-view.component.scss'],
})
export class PrimarySkillsModernViewComponent implements OnChanges {
  @Input() skills: Array<Skill>;
  viewData: Array<any>;

  constructor(
    private injector: Injector,
    private profileViewService: ProfileViewService
  ) {
    this.skills = this.injector.get('skills', new Array<Skill>());
    this.transformData();
  }

  transformData(): void {
    this.viewData = new Array<any>();
    if (this.skills && this.skills.length) {
      this.skills.map((skillItem: Skill) => {
        if (skillItem.isPrimarySkill === true) {
          const item = {
            ...skillItem,
            experience: this.profileViewService
              .getDuration(skillItem.from, skillItem.to, false)
              .toString(),
          };
          this.viewData.push(item);
        }
      });
    }
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
