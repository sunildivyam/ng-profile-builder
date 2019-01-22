import { NgModule, ModuleWithProviders } from '@angular/core';
import { LayoutService } from './layout.service';
import { LayoutConfig } from './layout.config';
import { HttpClientModule } from '@angular/common/http';
import { LayoutViewComponent } from './layout-view/layout-view.component';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [LayoutService,
    {
      provide: LayoutConfig,
      useValue: {apiUrl: '/api'}  // Default Api Url, if not provided in AppModule
    }],
  imports: [CommonModule, HttpClientModule],
  declarations: [LayoutViewComponent],
  exports: [LayoutViewComponent]
})

export class LayoutModule {
  constructor(public layoutService: LayoutService) {}

  static forRoot(config: any): ModuleWithProviders  {
    return {
      ngModule: LayoutModule,
      providers: [{
        provide: LayoutConfig,
        useValue: <LayoutConfig>config
      }]
    }
  }
}
