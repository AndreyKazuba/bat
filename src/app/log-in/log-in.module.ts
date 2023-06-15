import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { LogInComponent } from "./log-in.component";
import { CommonComponentsModule } from "../common/common-components.module";

@NgModule({
    declarations: [
        LogInComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CommonComponentsModule
    ],
})
export class LogInModule { }