import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { UserPageComponent } from "./user-page.component";

@NgModule({
    declarations: [
        UserPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class UserPageModule {}