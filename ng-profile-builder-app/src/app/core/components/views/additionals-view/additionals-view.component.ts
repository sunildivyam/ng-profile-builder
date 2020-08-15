import { Component, Input, OnChanges, Injector } from '@angular/core';
import { ProfileViewService } from '../../../services';
import { Additional } from '../../../models';


@Component({
  selector: 'pba-additionals-view',
  templateUrl: './additionals-view.component.html',
  styleUrls: ['./additionals-view.component.css']
})
export class AdditionalsViewComponent implements OnChanges {
  @Input() additionals: Array<Additional>;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.additionals = this.injector.get('additionals', new Array<Additional>());
    this.transformData();
  }

  transformData(): void {
    this.viewData = new Array<any>();
    if (this.additionals && this.additionals.length) {
      this.additionals.map((additionalItem: Additional) => {
        const item = { ...additionalItem };
        this.viewData.push(item);
      });
    }
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
