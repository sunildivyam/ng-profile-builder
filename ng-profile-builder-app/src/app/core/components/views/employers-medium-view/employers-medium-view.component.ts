import { Component, OnChanges, Input, Injector } from '@angular/core';
import { Employer } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-employers-medium-view',
  templateUrl: './employers-medium-view.component.html',
  styleUrls: ['./employers-medium-view.component.scss']
})
export class EmployersMediumViewComponent implements OnChanges {
  @Input() employers: Array<Employer>;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.employers = this.injector.get('employers', new Array<Employer>());
    this.transformData();
  }

  transformData(): void {
    this.viewData = new Array<any>();
    this.employers && this.employers.map((empItem: Employer) => {
      const item = { ...empItem, experience: this.profileViewService.getDuration(empItem.from, empItem.to).toString() };
      this.viewData.push(item);
    });
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
