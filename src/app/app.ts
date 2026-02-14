import { Component, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('sanvalentin');
  isPlaying = false;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {
    this.attemptAutoPlay();
    // Escuchar el primer click en cualquier parte para iniciar la música (Requerido por navegadores)
    const startMusic = () => {
      if (!this.isPlaying) {
        this.attemptAutoPlay();
      }
      document.removeEventListener('click', startMusic);
      document.removeEventListener('touchstart', startMusic);
    };
    document.addEventListener('click', startMusic);
    document.addEventListener('touchstart', startMusic);
  }

  private attemptAutoPlay() {
    const audio = this.audioPlayer.nativeElement;
    audio.play().then(() => {
      this.isPlaying = true;
    }).catch(err => {
      console.log('Autoplay bloqueado, esperando interacción: ', err);
    });
  }

  toggleMusic() {
    const audio = this.audioPlayer.nativeElement;
    if (this.isPlaying) {
      audio.pause();
      this.isPlaying = false;
    } else {
      audio.play().then(() => {
        this.isPlaying = true;
      });
    }
  }
}
