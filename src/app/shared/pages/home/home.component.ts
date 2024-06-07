import { Component } from "@angular/core";
import { SideFieldComponent, SideQuestion } from "../../components/sidefield/sidefield.component";

@Component({
  selector: 'home',
  standalone: true,
  imports: [SideFieldComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sides: SideQuestion = [
    'side1', 'side2'
  ]
}
