import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-razones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './razones.html',
  styleUrl: './razones.css',
})
export class Razones {
  allReasons = [
    { text: 'Amo tu voz.', emoji: '🎙️' },
    { text: 'Tu sonrisa me encanta.', emoji: '😊' },
    { text: 'Eres increíblemente inteligente.', emoji: '🧠' },
    { text: 'Me motivas a no rendirme.', emoji: '💪' },
    { text: 'Confiaste en mí cuando yo no podía.', emoji: '🤝' },
    { text: 'Me ayudaste a ser mejor persona.', emoji: '✨' },
    { text: 'Tus palabras siempre me levantan.', emoji: '�️' },
    { text: 'Me escuchas cantar.', emoji: '🎤' },
    { text: 'Me haces sentir en paz.', emoji: '🕊️' },
    { text: 'Contigo estoy tranquilo.', emoji: '😌' },
    { text: 'Contigo soy feliz.', emoji: '😁' },
    { text: 'Todo empezó con un mensaje tuyo.', emoji: '✉️' },
    { text: 'Nuestra conexión fue instantánea.', emoji: '⚡' },
    { text: 'Nunca dejamos de hablar.', emoji: '💬' },
    { text: 'Tienes paciencia conmigo.', emoji: '⏳' },
    { text: 'Supiste perdonarme.', emoji: '❤️' },
    { text: 'Elegiste continuar a mi lado.', emoji: '👣' },
    { text: 'Entiendes mis errores.', emoji: '🧩' },
    { text: 'Eres fuerte aunque no lo digas.', emoji: '�️‍♀️' },
    { text: 'Confías en mí incluso guardando tus cosas.', emoji: '🤫' },
    { text: 'Amas leer.', emoji: '📚' },
    { text: 'Tienes tu propio mundo en los libros.', emoji: '📖' },
    { text: 'Te gustan los dibujos animados.', emoji: '�' },
    { text: 'Te gusta Polar.', emoji: '🐻‍❄️' },
    { text: 'Disfrutas escucharme.', emoji: '👂' },
    { text: 'Te ríes conmigo.', emoji: '😂' },
    { text: 'Me das regalos aunque nunca los pedí.', emoji: '🎁' },
    { text: 'Cada detalle tuyo significa mucho.', emoji: '🎀' },
    { text: 'La distancia no nos separa.', emoji: '🌎' },
    { text: 'Estás en México, pero tu corazón está conmigo.', emoji: '🇲🇽' },
    { text: 'Planeaste venir a verme.', emoji: '✈️' },
    { text: 'Sueñas conmigo.', emoji: '💭' },
    { text: 'Hablamos de viajar juntos.', emoji: '🗺️' },
    { text: 'Imaginamos nuestra casa.', emoji: '�' },
    { text: 'Tendremos mi sala de videojuegos.', emoji: '🎮' },
    { text: 'Tendrás tu sala de lectura.', emoji: '�️' },
    { text: 'Soñamos con un cine en casa.', emoji: '🍿' },
    { text: 'Queremos recorrer pueblitos mágicos.', emoji: '🏰' },
    { text: 'Compartes tu tiempo conmigo.', emoji: '⏰' },
    { text: 'Me haces sentir amado.', emoji: '🥰' },
    { text: 'Me demuestras tu cariño.', emoji: '🌹' },
    { text: 'Eres espectacular.', emoji: '🌟' },
    { text: 'Me das paz mental.', emoji: '🧘' },
    { text: 'No tengo que fingir contigo.', emoji: '�' },
    { text: 'Me entiendes cuando estoy mal.', emoji: '🫂' },
    { text: 'Llegaste en el momento más difícil.', emoji: '🆘' },
    { text: 'Cambiaste mi historia.', emoji: '�' },
    { text: 'Me inspiras cada día.', emoji: '🎨' },
    { text: 'Respetas mis gustos.', emoji: '🆗' },
    { text: 'Te interesas por lo que amo.', emoji: '❤️' },
    { text: 'Sigues aquí.', emoji: '�' },
    { text: 'Me haces sentir suficiente.', emoji: '✅' },
    { text: 'Me impulsas a superarme.', emoji: '🚀' },
    { text: 'Tienes un corazón enorme.', emoji: '💖' },
    { text: 'Eres dulce y loquita conmigo.', emoji: '🍭' },
    { text: 'Eres comprensiva.', emoji: '👂' },
    { text: 'Nuestra historia es única.', emoji: '�' },
    { text: 'Empezamos de forma inesperada.', emoji: '⚡' },
    { text: 'Lo nuestro es real aunque no nos hayamos visto.', emoji: '💎' },
    { text: 'Me haces sentir seguro.', emoji: '�️' },
    { text: 'Me incluyes en tus planes.', emoji: '📝' },
    { text: 'Te preocupas por mí.', emoji: '😟' },
    { text: 'Me soportas.', emoji: '😅' },
    { text: 'Eres mi calma.', emoji: '🌊' },
    { text: 'Eres mi apoyo.', emoji: '⚓' },
    { text: 'Me aceptas con mis defectos.', emoji: '💖' },
    { text: 'Me ayudas a crecer.', emoji: '🌱' },
    { text: 'Tu presencia me da tranquilidad.', emoji: '☁️' },
    { text: 'Me haces sentir acompañado.', emoji: '👤' },
    { text: 'Tenemos sueños compartidos.', emoji: '🌠' },
    { text: 'Planeamos un futuro juntos.', emoji: '⏳' },
    { text: 'Eres parte de mis metas.', emoji: '🏁' },
    { text: 'Creo en el amor a distancia gracias a ti.', emoji: '✈️' },
    { text: 'No te rendiste conmigo.', emoji: '🛑' },
    { text: 'Quiero construir contigo.', emoji: '🏗️' },
    { text: 'Quiero viajar contigo.', emoji: '�' },
    { text: 'Quiero aprender contigo.', emoji: '🎓' },
    { text: 'Viste animes solo para compartir tiempo conmigo.', emoji: '📺' },
    { text: 'Jugaste videojuegos que jamás pensaste jugar.', emoji: '🎮' },
    { text: 'Vimos películas juntos aunque estuviéramos lejos.', emoji: '🎬' },
    { text: 'Hiciste tuyos mis gustos.', emoji: '🔄' },
    { text: 'Me dejaste entrar en tu mundo.', emoji: '🚪' },
    { text: 'Estás a pesar de tu poco tiempo.', emoji: '⏳' },
    { text: 'Aceptas mis bromas.', emoji: '🤡' },
    { text: 'Me haces sentir importante.', emoji: '👑' },
    { text: 'Me das tranquilidad incluso en la distancia.', emoji: '🌌' },
    { text: 'Elegimos intentarlo a pesar de todo.', emoji: '�' },
    { text: 'Me haces sentir querido todos los días.', emoji: '💞' },
    { text: 'Confías en nuestro futuro.', emoji: '🔮' },
    { text: 'Soñamos en grande.', emoji: '�' },
    { text: 'Imagino envejecer contigo.', emoji: '👵👴' },
    { text: 'Me das esperanza.', emoji: '🕊️' },
    { text: 'Tu existencia cambió la mía.', emoji: '�' },
    { text: 'Me haces querer ser mejor cada día.', emoji: '☀️' },
    { text: 'Me das fuerzas cuando dudo.', emoji: '�' },
    { text: 'Eres mi persona favorita.', emoji: '�' },
    { text: 'Me haces sentir especial.', emoji: '✨' },
    { text: 'Nuestro amor supera kilómetros.', emoji: '🛣️' },
    { text: 'Contigo todo tiene sentido.', emoji: '🧭' },
    { text: 'Te amo más de lo que puedo explicar.', emoji: '♾️' }
  ];

  displayedReasons: any[] = [];
  starConfigs: any[] = [];
  private currentBatchIndex = 0;

  // Posiciones optimizadas para PC - Sincronizadas y centradas
  private pcPositions = [
    { top: '15%', left: '20%' },
    { top: '15%', left: '60%' },
    { top: '40%', left: '40%' },
    { top: '65%', left: '20%' },
    { top: '65%', left: '60%' }
  ];

  // Posiciones optimizadas para Mobile - 2 Columnas para mejor uso del espacio
  private mobilePositions = [
    { top: '15%', left: '2%' },
    { top: '15%', left: '52%' },
    { top: '55%', left: '2%' },
    { top: '55%', left: '52%' }
  ];

  rotationX = 0;
  rotationY = 0;

  constructor(private router: Router) {
    this.updateVisibleReasons();
    setInterval(() => this.nextBatch(), 9000); // Dar más tiempo para leer
  }

  private getBatchSize(): number {
    if (typeof window !== 'undefined' && window.innerWidth <= 600) {
      return 4; // 4 razones en 2 columnas para móvil
    }
    return 5; // 5 en PC
  }

  private updateVisibleReasons() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;
    const currentBatchSize = this.getBatchSize();
    const positions = isMobile ? this.mobilePositions : this.pcPositions;

    const start = this.currentBatchIndex * currentBatchSize;
    let batch = this.allReasons.slice(start, start + currentBatchSize);

    // Si llegamos al final, reiniciamos
    if (batch.length === 0) {
      this.currentBatchIndex = 0;
      this.updateVisibleReasons();
      return;
    }

    this.displayedReasons = batch;
    this.starConfigs = batch.map((_, i) => ({
      ...positions[i],
      delay: (i * 0.8) + 's',
      duration: '9s'
    }));
  }

  nextBatch() {
    this.currentBatchIndex++;
    const currentBatchSize = this.getBatchSize();

    if (this.currentBatchIndex * currentBatchSize >= this.allReasons.length) {
      this.currentBatchIndex = 0;
    }
    this.updateVisibleReasons();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    this.rotationX = y * 20; // Max 10 degrees
    this.rotationY = -x * 20;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
