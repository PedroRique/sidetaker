import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

export type Side = {
  title: string;
  count: number;
};
export type Sides = [Side, Side];
export type SideQuestions = {
  sides: Sides;
}[];

@Component({
  selector: 'sidefield',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="sidefield-container">
      <h1>{{ side.title }}</h1>
      <h2>Chosen by {{ side.count }}</h2>
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
