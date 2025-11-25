import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-maheshwari',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-maheshwari.component.html',
  styleUrls: ['./about-maheshwari.component.css']
})
export class AboutMaheshwariComponent {
  features = [
    {
      title: 'Historic Origins',
      description: 'Flourished under Queen Ahilyabai Holkar in 18th century',
      icon: '🏛️'
    },
    {
      title: 'Signature Motifs', 
      description: 'Geometric patterns inspired by temple architecture',
      icon: '🔷'
    },
    {
      title: 'Reversible Borders',
      description: 'Unique double-sided border designs',
      icon: '🔄'
    },
    {
      title: 'Lightweight Fabric',
      description: 'Perfect balance of silk warp and cotton weft',
      icon: '👗'
    }
  ];

  colors = [
    { name: 'Rani Pink', code: 'bg-pink-500' },
    { name: 'Angoori Green', code: 'bg-green-500' },
    { name: 'Madhu Yellow', code: 'bg-yellow-400' },
    { name: 'Neel Blue', code: 'bg-blue-500' },
    { name: 'Mustard', code: 'bg-yellow-500' }
  ];

  motifs = [
    { name: 'Leher', description: 'Wave patterns inspired by Narmada river' },
    { name: 'Chatai', description: 'Mat weave geometric designs' },
    { name: 'Kangi', description: 'Comb-like decorative patterns' },
    { name: 'Temple', description: 'Architectural inspired carvings' }
  ];
}
