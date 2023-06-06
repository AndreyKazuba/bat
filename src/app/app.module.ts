import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LogInComponent } from './log-in/log-in.component';

import { SpinnerComponent } from './common/components/spinner/spinner.component';
import { SpinnerButtonComponent } from './common/components/spinner-button/spinner-button.component';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SpinnerComponent,
    SpinnerButtonComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
