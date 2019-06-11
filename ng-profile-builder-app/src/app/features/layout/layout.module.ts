import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { RouterModule} from '@angular/router';

import { LayoutViewComponent } from './layout-view/layout-view.component';
import { LayoutListComponent } from './layout-list/layout-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ManageLayoutsComponent } from './manage-layouts/manage-layouts.component';
import { ColumnFormComponent } from './column-form/column-form.component';
import { LayoutCardsViewComponent } from './layout-cards-view/layout-cards-view.component';

@NgModule({
  providers:[],
  imports: [CoreModule, FormsModule, CommonModule, RouterModule],
  declarations: [LayoutViewComponent, LayoutListComponent, ManageLayoutsComponent, ColumnFormComponent, LayoutCardsViewComponent],
  exports: [LayoutViewComponent, LayoutListComponent, ManageLayoutsComponent, ColumnFormComponent, LayoutCardsViewComponent]
})
export class LayoutModule {}
