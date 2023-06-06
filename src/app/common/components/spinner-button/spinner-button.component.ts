import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bat-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent {
  @Input() value: string = ''

  @Output() click: EventEmitter<Event> = new EventEmitter<Event>();

  isValueVisible: boolean = true;
  isSpinnerVisible: boolean = false;

  onClick(event: Event): void {
    this.click.emit(event);
  }

  showSpinner(): void {
    this.isValueVisible = false;
    this.isSpinnerVisible = true;
  }
}
