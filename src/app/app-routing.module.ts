import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { UserPageComponent } from './user-page/user-page.component';

import { authGuard } from './common/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: LogInComponent },
  { path: 'user-page/:id', component: UserPageComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
