import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Profile, ProfileContent } from '../models';
import { FirebaseService } from 'src/app/core';

@Component({
  selector: 'pba-preview-profile',
  templateUrl: './preview-profile.component.html',
  styleUrls: ['./preview-profile.component.scss']
})
export class PreviewProfileComponent implements OnInit {
  currentProfile: Profile;
  constructor(private firebaseService: FirebaseService,
    private route: ActivatedRoute) { }

  public getProfile(id: string): any {
    if ((this.currentProfile && this.currentProfile.id == id) || !id) {
      return false;
    }
    this.firebaseService.getProfile(id, '').subscribe((profile: Profile) => {
      profile.content = <ProfileContent>{...(new ProfileContent()), ...profile.content};
      this.currentProfile = profile;
    });
  }

  ngOnInit() {
    this.route.parent.url.subscribe((urlSegments: Array<UrlSegment>) => {
      if (urlSegments.length) {
        const profileId = urlSegments[0].path;
        this.getProfile(profileId);
      }
    });

    this.route.url.subscribe((urlSegments: Array<UrlSegment>) => {
      if (urlSegments.length >= 2) {
        const profileId = urlSegments[1].path;
        this.getProfile(profileId);
      }
    });
  }
}
