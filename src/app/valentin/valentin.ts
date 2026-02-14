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
    // Usamos viewport units para que se mueva por toda la pantalla de forma agresiva
    const randomTop = Math.floor(Math.random() * 70) + 5; // 5vh a 75vh
    const randomLeft = Math.floor(Math.random() * 70) + 5; // 5vw a 75vw

    this.noButtonPosition = {
      top: `${randomTop}vh`,
      left: `${randomLeft}vw`
    };
  }
}
