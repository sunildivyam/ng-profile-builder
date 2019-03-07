import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core';
import { RouterModule} from '@angular/router';

import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { LayoutModule } from '../layout';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ProfileSectionPickerComponent } from './profile-section-picker/profile-section-picker.component';

@NgModule({
  providers: [],
  imports: [CoreModule, CommonModule, RouterModule, LayoutModule],
  declarations: [ProfileFormComponent,
    ManageProfileComponent,
    ProfileViewComponent,
    ProfileSectionComponent,
    ProfileSectionPickerComponent],
  exports: [ProfileFormComponent, ManageProfileComponent]
})

export class ProfileModule {}
