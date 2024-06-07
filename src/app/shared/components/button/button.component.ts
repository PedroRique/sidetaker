import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'sidebutton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="handleClick()">{{label}}</button>
  `
})
export class ButtonComponent {
  @Input({ required: true }) label: string = 'Click';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
