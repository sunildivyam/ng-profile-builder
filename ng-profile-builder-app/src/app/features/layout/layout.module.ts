import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { LayoutViewComponent } from './layout-view/layout-view.component';
import { LayoutListComponent } from './layout-list/layout-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ManageLayoutsComponent } from './manage-layouts/manage-layouts.component';
import { ColumnFormComponent } from './column-form/column-form.component';

@NgModule({
  providers:[],
  imports: [CoreModule, FormsModule, CommonModule],
  declarations: [LayoutViewComponent, LayoutListComponent, ManageLayoutsComponent, ColumnFormComponent],
  exports: [LayoutViewComponent, LayoutListComponent, ManageLayoutsComponent, ColumnFormComponent]
})
export class LayoutModule {}
