import { Component, OnChanges, Input, Injector } from '@angular/core';
import { Employer } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-employers-small-view',
  templateUrl: './employers-small-view.component.html',
  styleUrls: ['./employers-small-view.component.scss']
})
export class EmployersSmallViewComponent implements OnChanges {
  @Input() employers: Array<Employer>;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.employers = this.injector.get('employers', new Array<Employer>());
    this.transformData();
  }

  transformData(): void {
    this.viewData = new Array<any>();
    if (this.employers && this.employers.length) {
      this.employers.map((empItem: Employer) => {
        const item = { ...empItem, experience: this.profileViewService.getDuration(empItem.from, empItem.to).toString() };
        this.viewData.push(item);
      });
    }
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
