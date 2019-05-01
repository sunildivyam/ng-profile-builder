import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { RouterModule } from '@angular/router';

// Firebase modules
import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

// import * as firebase from 'firebase/app';
// import * as firebaseui from 'firebaseui';

import * as CommonComponents from './components/common';
import * as FormComponents from './components/forms';
import * as ViewComponents from './components/views';
import * as Services from './services';
import { environment } from 'src/environments/environment';

const declarables = { ...FormComponents, ...CommonComponents, ...ViewComponents };
const exportables = { ...declarables };
const providers = {...Services};

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
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
}

@NgModule({
  providers: Object.values(providers),
  imports: [CommonModule,
    FormsModule,
    DndModule.forRoot(),
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    FirebaseUIModule.forRoot(firebaseuiConfig)],
  declarations: Object.values(declarables),
  exports: Object.values(exportables),
  entryComponents: Object.values({ ...FormComponents, ...ViewComponents }),
})
export class CoreModule { }
