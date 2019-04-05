import { Component, OnChanges, Injector, Input } from '@angular/core';
import { BasicInfo } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnChanges {
  @Input() basicInfo: BasicInfo;
  viewData: any;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.basicInfo = this.injector.get('basicInfo') || new BasicInfo();
    this.transformData();
  }

  transformData() {
    this.viewData = {...this.basicInfo};
  }

  ngOnChanges() {
    this.transformData();
  }
}
