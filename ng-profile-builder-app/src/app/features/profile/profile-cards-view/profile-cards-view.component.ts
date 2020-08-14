import { Component, OnChanges, Input } from '@angular/core';
import { ProfileViewService } from '../../../core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Profile, ProfileContent } from '../models';
import { FirebaseService, AuthService } from 'src/app/core';

@Component({
  selector: 'pba-profile-cards-view',
  templateUrl: './profile-cards-view.component.html',
  styleUrls: ['./profile-cards-view.component.scss']
})
export class ProfileCardsViewComponent implements OnChanges {
  profiles: Array<Profile>;
  viewData: Array<any>;

  constructor(private profileViewService: ProfileViewService,
              private firebaseService: FirebaseService,
              private authService: AuthService,
              private route: ActivatedRoute) {
    this.route.url.subscribe((urlSegments: Array<UrlSegment>) => {
      if (urlSegments.length) {
        this.getProfiles();
      }
    });
  }

  public getProfiles(): void {
    this.firebaseService.getProfiles(this.authService.currentUserId).subscribe((profiles: Array<Profile>) => {
      this.profiles = profiles;
      this.transformData();
    }, (profiles: Array<Profile>) => {
      this.profiles = profiles;
      this.transformData();
    });
  }

  transformData(): void {
    this.viewData = new Array<any>();
    this.profiles.map((profile: Profile) => {
      const profileItem = { ...profile };
      this.viewData.push(profileItem);
    });
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
