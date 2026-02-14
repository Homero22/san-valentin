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
    // Usamos porcentajes relativos al contenedor padre (valentine-container)
    // para un control total y evitar que se pierda en el viewport
    const randomTop = Math.floor(Math.random() * 70) + 10; // 10% a 80%
    const randomLeft = Math.floor(Math.random() * 70) + 10; // 10% a 80%

    this.noButtonPosition = {
      top: `${randomTop}%`,
      left: `${randomLeft}%`
    };
  }
}
