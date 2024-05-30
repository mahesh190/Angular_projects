import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustPipePipe } from './cust-pipe.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Child1Component } from './child-1/child-1.component';
import { Child2Component } from './child-2/child-2.component';

@NgModule({
  declarations: [
    AppComponent,
    CustPipePipe,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule, NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
