import { Component, OnChanges, Input, Injector } from '@angular/core';
import {Employer} from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-employers-view',
  templateUrl: './employers-view.component.html',
  styleUrls: ['./employers-view.component.scss']
})
export class EmployersViewComponent implements OnChanges {
  @Input() employers: Array<Employer>;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.employers = this.injector.get('employers') || new Array<Employer>();
    this.transformData();
  }

  transformData() {
    this.viewData = new Array<any>();
    this.employers.map((empItem: Employer) => {
      const item = {...empItem, experience: this.profileViewService.getDuration(empItem.from, empItem.to).toString() };
      this.viewData.push(item);
    });
  }

  ngOnChanges() {
    this.transformData();
  }
}
