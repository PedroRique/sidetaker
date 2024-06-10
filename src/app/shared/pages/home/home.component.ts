import { Component, inject } from '@angular/core';
import {
  SideFieldComponent,
  Sides,
  SideQuestions,
} from '../../components/sidefield/sidefield.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [SideFieldComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  questions$: Observable<SideQuestions>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const questionCollection = collection(this.firestore, 'questions');
    this.questions$ = collectionData<SideQuestions>(questionCollection);
  }
}
