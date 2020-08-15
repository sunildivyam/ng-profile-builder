import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { Profile, ProfileContent } from '../models';
import { FirebaseService, AuthService /*, ProfileService */ } from 'src/app/core';
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
  isReadonlyProfileView = false;

  constructor(private firebaseService: FirebaseService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router /* ,
    private profileService: ProfileService */ ) {
      this.route.parent.url.subscribe((urlSegments: Array<UrlSegment>) => {
        if (urlSegments.length) {
          const profileId = urlSegments[0].path;
          if (profileId && profileId !== '0') {
            this.getProfile(profileId);
          } else {
            this.currentProfile = new Profile();
            this.currentLayout = new Layout();
            this.createProfile();
          }
        }
      });
    }

  ngOnInit(): void {
    this.getLayouts();
  }

  public getProfile(id: string): void {
    this.firebaseService.getProfile(id, this.authService.currentUserId).subscribe((profile: Profile) => {
      profile.content = ({...(new ProfileContent()), ...profile.content} as ProfileContent);
      this.currentProfile = profile;
    }, (error) => {
      this.currentProfile = null;
    });
  }

  public createProfile(): void {
    this.firebaseService.createProfile(this.currentProfile).subscribe((newProfileId: string) => {
      this.router.navigateByUrl(`/profiles/${newProfileId}/manage`);
    });
  }

  public duplicateProfile(profile: Profile): void {
    this.firebaseService.createProfile(profile).subscribe((newProfileId: string) => {
      this.router.navigateByUrl('/dashboard');
    });
  }

  public updateProfile(successCb, nextCb, errorCb): void {
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

  public deleteProfile(): void {
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
    this.currentProfile.uid = this.authService.currentUserId;

    this.createProfile();
  }

  public deleteProfileClick(): void {
    this.deleteProfile();
  }

  public updateProfileClick(event): void {
    const profileStep = event.currentStep;
    this.currentProfile.content[profileStep.name] = profileStep.data[profileStep.name];
    this.updateProfile(event.savedSuccess, event.savedNext, event.savedError);
  }

  updateLayoutClicked(): void {
    this.isLayoutMode = true;
    this.isDataMode = false;
  }

  updateProfileContentClicked(): void {
    this.isDataMode = true;
    this.isLayoutMode = false;
  }

  closeEditMode(event): void {
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

  revertLayoutClick(): void {
    this.currentProfile.layout = this.originalLayout;
    this.currentLayout = undefined;
  }

  public updateProfileLayoutClick(event): void {
    this.updateProfile(event.savedSuccess, event.savedNext, event.savedError);
  }

  public duplicateProfileClicked(): void {
    const duplicatedProfile = {...this.currentProfile};
    duplicatedProfile.id = undefined;
    duplicatedProfile.content.basicInfo.profileName = `DUPLICATED: ${duplicatedProfile.content.basicInfo.profileName}`;
    this.duplicateProfile(duplicatedProfile);
  }

  public toggleProfileViewModeClick(): void {
    this.isReadonlyProfileView = !this.isReadonlyProfileView;
  }

  // public migrateFromPrevious() {
  //   let prevProfiles = new Array<any>();
  //   this.profileService.getProfilesForMigration().subscribe((res: any) => {
  //     prevProfiles = res.data;
  //     prevProfiles.map((prevProfile) => {
  //       delete prevProfile._id;
  //       const newProfile = new Profile();
  //       newProfile.content = <ProfileContent>prevProfile;
  //       newProfile.uid = this.authService.currentUserId;
  //       this.firebaseService.createProfile(newProfile).subscribe((newProfileId: string) => {
  //         console.log("CREATED: ", newProfileId);
  //       });
  //     });
  //   });
  // }
}
