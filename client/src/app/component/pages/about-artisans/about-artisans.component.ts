import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-artisans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-artisans.component.html',
  styleUrls: ['./about-artisans.component.css']
})
export class AboutArtisansComponent {
  artisans = [
    {
      name: 'Avesh Khan',
      image: 'assets/images/avesh-khan.jpg',
      bio: 'Third generation master weaver specializing in geometric motifs',
      experience: '25+ years',
      specialty: 'Reversible borders and temple patterns',
      quote: 'Every thread tells a story of our heritage'
    },
    {
      name: 'Sanjay Pawar', 
      image: 'assets/images/sanjay-pawar.jpg',
      bio: 'Award-winning artisan known for intricate leher patterns',
      experience: '18+ years',
      specialty: 'Leher and chatai motifs',
      quote: 'Weaving is not just a craft, it\'s our identity'
    }
  ];
}
