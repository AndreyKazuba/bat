import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInModule } from './log-in/log-in.module';
import { UserPageModule } from './user-page/user-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LogInModule,
    UserPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
