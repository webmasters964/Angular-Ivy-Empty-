import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent, FooterComponent, SidebarComponent } from '../shared/components';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './service/token-interceptor.service'
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    RouterModule, CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      }]
    };
  }
}
