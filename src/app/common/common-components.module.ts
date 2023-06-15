import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { SpinnerComponent } from "./components/spinner/spinner.component";
import { SpinnerButtonComponent } from "./components/spinner-button/spinner-button.component";

@NgModule({
    declarations: [
        SpinnerComponent,
        SpinnerButtonComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        SpinnerComponent,
        SpinnerButtonComponent
    ]
})
export class CommonComponentsModule { }