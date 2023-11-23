import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts = [
    { id: 1, title: 'Comisión de Economía sobre retiro de pensiones', content: '💸 El presidente del Banco Central de Reserva, Julio Velarde, compareció ante el Congreso para debatir la viabilidad de un séptimo retiro de fondos de AFP. Esta presentación se da en medio de una propuesta que está generando discusión debido a sus posibles efectos en la economía y el sistema de pensiones.' },
    { id: 2, title: 'Policía evita secuestro de empresario y fallece presunto delincuente en tiroteo', content: 'Ammazig' },
    { id: 3, title: 'Senamhi anuncia fuertes lluvias en Perú: ¿qué regiones serán afectadas?', content: 'Aprendien angular' },
  ];

  selectedPost: { id: number, title: string, content: string } | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(post: { id: number, title: string, content: string }): void {
    this.selectedPost = post;
  }
}
