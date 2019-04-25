import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core';
import { RouterModule} from '@angular/router';

import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { PreviewProfileComponent } from './preview-profile/preview-profile.component';
import { LayoutModule } from '../layout';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { ProfileSectionPickerComponent } from './profile-section-picker/profile-section-picker.component';
import { ProfileCardsViewComponent } from './profile-cards-view/profile-cards-view.component';

@NgModule({
  providers: [],
  imports: [CoreModule, CommonModule, RouterModule, LayoutModule],
  declarations: [ProfileFormComponent,
    ManageProfileComponent,
    ProfileViewComponent,
    PreviewProfileComponent,
    ProfileSectionComponent,
    ProfileSectionPickerComponent,
    ProfileCardsViewComponent],
  exports: [ProfileFormComponent,
    ManageProfileComponent,
    PreviewProfileComponent,
    ProfileCardsViewComponent]
})

export class ProfileModule {}
