import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Picture } from './picture/picture';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Picture],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-hw-3');
}
