import { Component } from '@angular/core';
import { DepartmentCardsComponent } from "../../components/department-cards/department-cards.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DepartmentCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
