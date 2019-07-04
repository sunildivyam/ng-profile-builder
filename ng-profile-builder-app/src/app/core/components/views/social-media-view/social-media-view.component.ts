import { Component, Input, OnChanges, Injector } from '@angular/core';
import { SocialMedia } from '../../../models';
import { ProfileViewService } from '../../../services';

@Component({
  selector: 'pba-social-media-view',
  templateUrl: './social-media-view.component.html',
  styleUrls: ['./social-media-view.component.css']
})
export class SocialMediaViewComponent implements OnChanges {
  @Input() socialMedia: Array<SocialMedia>;
  viewData: Array<any>;

  constructor(private injector: Injector, private profileViewService: ProfileViewService) {
    this.socialMedia = this.injector.get('socialMedia', new Array<SocialMedia>());
    this.transformData();
  }

  transformData() {
    this.viewData = new Array<any>();
    this.socialMedia && this.socialMedia.map((socialMediaItem: SocialMedia) => {
      const item = { ...socialMediaItem };
      this.viewData.push(item);
    });
  }

  ngOnChanges() {
    this.transformData();
  }
}
