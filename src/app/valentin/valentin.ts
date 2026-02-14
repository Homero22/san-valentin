import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valentin.html',
  styleUrl: './valentin.css',
})
export class Valentin {
  noButtonPosition = { top: '0px', left: '0px' };
  isMoved = false;

  constructor(private router: Router) { }

  onSiClick() {
    this.router.navigate(['/razones']);
  }

  moveNoButton() {
    this.isMoved = true;
    // Rango más seguro para que no se salga de la pantalla (especialmente en móvil)
    // Manteniéndolo entre 15% y 75% de la pantalla
    const randomTop = Math.floor(Math.random() * 60) + 15;
    const randomLeft = Math.floor(Math.random() * 60) + 15;

    this.noButtonPosition = {
      top: `${randomTop}vh`,
      left: `${randomLeft}vw`
    };
  }
}
