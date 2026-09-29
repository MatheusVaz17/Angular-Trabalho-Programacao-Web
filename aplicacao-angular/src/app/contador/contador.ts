import { publishFacade } from '@angular/compiler';
import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contador',
  styleUrl: './contador.css',
  templateUrl: './contador.html',
  standalone: true
})

export class ContadorComponent {

  public totalCliques = signal<number>(0);

  public incrementarContador(): void {
    this.totalCliques.update(valorAtual => valorAtual +1);
  }


  public resetarContador(): void {
    this.totalCliques.set(0);
  }
}