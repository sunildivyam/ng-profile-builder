import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { RouterModule } from '@angular/router';

// Firebase modules
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, DefaultFirestoreSettings } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import * as CommonComponents from './components/common';
import * as FormComponents from './components/forms';

import * as ViewComponents from './components/views';
import * as Services from './services';
import { environment } from 'src/environments/environment';

// This removes warning from console. as this setting will be removed from future releases, and will work as true by default.
delete DefaultFirestoreSettings.timestampsInSnapshots;

const firebaseuiConfig = {
  signInFlow: 'redirect', // or popup
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/termsofservice',
  privacyPolicyUrl: '/privacypolicy',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
}

@NgModule({
  providers: Object.values(Services),
  imports: [CommonModule,
    FormsModule,
    DndModule.forRoot(),
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    FirebaseUIModule.forRoot(firebaseuiConfig)],
  declarations: [
    CommonComponents.AppFooterComponent,
    CommonComponents.AppHeaderComponent,
    CommonComponents.BackgroundComponent,
    CommonComponents.ControlToolbarComponent,
    CommonComponents.WizardComponent,
    CommonComponents.MessageComponent,
    CommonComponents.LoginComponent,
    CommonComponents.ParallaxDirective,
    FormComponents.AdditionalsFormComponent,
    FormComponents.BasicInfoFormComponent,
    FormComponents.EducationFormComponent,
    FormComponents.EmployersFormComponent,
    FormComponents.ExtendedListFormComponent,
    FormComponents.ImageUploadFormComponent,
    FormComponents.SocialMediaFormComponent,
    FormComponents.SkillsFormComponent,
    FormComponents.RatingFormComponent,
    FormComponents.ProjectsFormComponent,
    ViewComponents.AdditionalsViewComponent,
    ViewComponents.BasicInfoViewComponent,
    ViewComponents.ContactBarViewComponent,
    ViewComponents.DisclaimerViewComponent,
    ViewComponents.EducationViewComponent,
    ViewComponents.EmployersMediumViewComponent,
    ViewComponents.EmployersSmallViewComponent,
    ViewComponents.EmployersViewComponent,
    ViewComponents.ExperienceBarViewComponent,
    ViewComponents.SummaryViewComponent,
    ViewComponents.SocialMediaViewComponent,
    ViewComponents.SkillsViewComponent,
    ViewComponents.RatingViewComponent,
    ViewComponents.ProjectsViewComponent,
    ViewComponents.ProjectsSmallViewComponent,
    ViewComponents.ProjectsMediumViewComponent,
    ViewComponents.ProfileHeaderViewComponent,
    ViewComponents.PrimarySkillsViewComponent,
    ViewComponents.ImageViewComponent,
    ],
  exports: [
    CommonComponents.AppFooterComponent,
    CommonComponents.AppHeaderComponent,
    CommonComponents.BackgroundComponent,
    CommonComponents.ControlToolbarComponent,
    CommonComponents.WizardComponent,
    CommonComponents.MessageComponent,
    CommonComponents.LoginComponent,
    CommonComponents.ParallaxDirective,
    FormComponents.AdditionalsFormComponent,
    FormComponents.BasicInfoFormComponent,
    FormComponents.EducationFormComponent,
    FormComponents.EmployersFormComponent,
    FormComponents.ExtendedListFormComponent,
    FormComponents.ImageUploadFormComponent,
    FormComponents.SocialMediaFormComponent,
    FormComponents.SkillsFormComponent,
    FormComponents.RatingFormComponent,
    FormComponents.ProjectsFormComponent,
    ViewComponents.AdditionalsViewComponent,
    ViewComponents.BasicInfoViewComponent,
    ViewComponents.ContactBarViewComponent,
    ViewComponents.DisclaimerViewComponent,
    ViewComponents.EducationViewComponent,
    ViewComponents.EmployersMediumViewComponent,
    ViewComponents.EmployersSmallViewComponent,
    ViewComponents.EmployersViewComponent,
    ViewComponents.ExperienceBarViewComponent,
    ViewComponents.SummaryViewComponent,
    ViewComponents.SocialMediaViewComponent,
    ViewComponents.SkillsViewComponent,
    ViewComponents.RatingViewComponent,
    ViewComponents.ProjectsViewComponent,
    ViewComponents.ProjectsSmallViewComponent,
    ViewComponents.ProjectsMediumViewComponent,
    ViewComponents.ProfileHeaderViewComponent,
    ViewComponents.PrimarySkillsViewComponent,
    ViewComponents.ImageViewComponent
    ],
  entryComponents: Object.values({ ...FormComponents, ...ViewComponents }),
})
export class CoreModule { }
