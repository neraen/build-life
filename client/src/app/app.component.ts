import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IndredientsContainerComponent} from "./indredients-container/indredients-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndredientsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}
