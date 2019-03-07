import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Profile, ProfileContent } from '../models';
import { FirebaseService, AuthService } from 'src/app/core';
import { Layout } from '../../layout';

@Component({
  selector: 'pba-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  currentProfile: Profile;
  isLayoutMode = false;
  isDataMode = false;
  layouts: Array<Layout>;
  originalLayout: Layout;
  currentLayout: Layout;
  isUpdatingProfile: boolean;

  constructor(private firebaseService: FirebaseService,
    private authService: AuthService,
    private route: ActivatedRoute ) {
      this.route.url.subscribe((urlSegments: Array<UrlSegment>) => {
        if (urlSegments.length) {
          const profileId = urlSegments[0].path;
          this.getProfile(profileId);
        }
      });
    }

  ngOnInit() {
    this.getLayouts();
  }

  public getProfile(id: string) {
    this.firebaseService.getProfile(id).subscribe((profile: Profile) => {
      profile.content = <ProfileContent>{...(new ProfileContent()), ...profile.content};
      this.currentProfile = profile;
    });
  }

  public createProfile() {
    this.firebaseService.createProfile(this.currentProfile).subscribe((newProfileId: string) => {
      this.currentProfile.id = newProfileId;
    });
  }

  public updateProfile(successCb, nextCb, errorCb) {
    this.isUpdatingProfile = true;
    this.firebaseService.updateProfile(this.currentProfile.id, this.currentProfile).subscribe(
      () => {
        if (typeof nextCb === 'function') {
          nextCb();
        }
      },
      (errorRes) => {
        if (typeof errorCb === 'function') {
          errorCb(errorRes);
        }
      },
      () => {
        if (typeof successCb === 'function') {
          successCb();
        }
        this.isUpdatingProfile = false;
        setTimeout(() => {
          if (this.isUpdatingProfile === false) {
            this.isUpdatingProfile = null;
          }
        }, 1000);
      }
    );
  }

  public deleteProfile() {
    this.firebaseService.deleteProfile(this.currentProfile.id).subscribe((updatedProfile: Profile) => {
      this.currentProfile = updatedProfile;
    });
  }

  public getLayouts(): void {
    this.firebaseService.getLayouts(this.authService.currentUserId)
      .subscribe((layouts: Array<Layout>) => this.layouts = layouts);
  }

  public addProfileClick(): void {
    this.currentProfile = new Profile();
    this.currentProfile.userId = this.authService.currentUserId;

    this.createProfile();
  }

  public deleteProfileClick(): void {
    this.deleteProfile();
  }

  public updateProfileClick(event): void {
    const profileStep = event.currentStep;
    this.currentProfile.content[profileStep.name] = profileStep.data[profileStep.name];
    this.updateProfile(event.onSaveSuccess, event.onSaveNext, event.onSaveError);
  }

  updateLayoutClicked() {
    this.isLayoutMode = true;
    this.isDataMode = false;
  }

  updateProfileContentClicked() {
    this.isDataMode = true;
    this.isLayoutMode = false;
  }

  closeEditMode(event) {
    event.preventDefault();
    this.isDataMode = false;
    this.isLayoutMode = false;
  }

  currentLayoutChanged(layout: Layout): void {
    if (typeof this.originalLayout === 'undefined') {
      this.originalLayout = this.currentProfile.layout;
    }
    this.currentLayout = layout;
    this.currentProfile.layout = layout;
  }

  revertLayoutClick() {
    this.currentProfile.layout = this.originalLayout;
    this.currentLayout = undefined;
  }

  public updateProfileLayoutClick(event): void {
    this.updateProfile(event.onSaveSuccess, event.onSaveNext, event.onSaveError);
  }
}
