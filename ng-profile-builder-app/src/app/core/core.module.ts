import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DndModule } from 'ng2-dnd';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import * as CommonComponents from './components/common';
import * as FormComponents from './components/forms';
import * as ViewComponents from './components/views';
import * as Services from './services';
import { environment } from 'src/environments/environment';

const declarables = { ...FormComponents, ...CommonComponents, ...ViewComponents };
const exportables = { ...declarables };
const providers = {...Services};

@NgModule({
  providers: Object.values(providers),
  imports: [CommonModule,
    FormsModule,
    DndModule.forRoot(),
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()],
  declarations: Object.values(declarables),
  exports: Object.values(exportables),
  entryComponents: Object.values({ ...FormComponents, ...ViewComponents }),
})
export class CoreModule { }
