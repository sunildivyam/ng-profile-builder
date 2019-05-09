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
    private route: ActivatedRoute) {
    this.route.url.subscribe((urlSegments: Array<UrlSegment>) => {
      if (urlSegments.length) {
        const profileId = urlSegments[0].path;
        this.getProfile(profileId);
      }
    });
  }

  public getProfile(id: string) {
    this.firebaseService.getProfile(id, '').subscribe((profile: Profile) => {
      profile.content = <ProfileContent>{...(new ProfileContent()), ...profile.content};
      this.currentProfile = profile;
    });
  }

  ngOnInit() {
  }
}
