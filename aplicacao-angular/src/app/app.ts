import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador';

@Component({
  imports: [ContadorComponent],
  standalone: true,
  template: `<app-contador></app-contador>`,
  selector: 'app-root'

})
export class App {
  protected readonly title = signal('aplicacao-angular');
}
