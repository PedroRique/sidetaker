import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

export type Side = string;
export type SideQuestion = [Side, Side];

@Component({
  selector: 'sidefield',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="sidefield-container">
      <h1>{{ side }}</h1>
      <sidebutton label="Take this side" (clicked)="handleSideClick()" />
    </div>
  `,
  styleUrl: `./sidefield.component.scss`,
})
export class SideFieldComponent {
  @Input({ required: true }) side!: Side;

  handleSideClick() {
    alert('Side taken');
  }
}
