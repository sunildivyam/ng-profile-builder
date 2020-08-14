import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Profile, ProfileContent } from '../models';
import { FirebaseService } from 'src/app/core';

@Component({
  selector: 'pba-parallax-view-profile',
  templateUrl: './parallax-view-profile.component.html',
  styleUrls: ['./parallax-view-profile.component.scss']
})
export class ParallaxViewProfileComponent implements OnInit {
  isDataReady = false;
  currentProfile: Profile;
  constructor(private firebaseService: FirebaseService,
              private route: ActivatedRoute) { }

  public getProfile(id: string): any {
    if ((this.currentProfile && this.currentProfile.id == id) || !id) {
      return false;
    }
    this.firebaseService.getProfile(id, '').subscribe((profile: Profile) => {
      profile.content = ({...(new ProfileContent()), ...profile.content} as ProfileContent);
      this.currentProfile = profile;
      this.isDataReady = true;
    });
  }

  ngOnInit(): void {
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
