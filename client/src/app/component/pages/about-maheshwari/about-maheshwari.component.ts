import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-maheshwari',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-maheshwari.component.html',
  styleUrls: ['./about-maheshwari.component.css']
})
export class AboutMaheshwariComponent {
  features = [
    {
      title: 'Historic Origins',
      description: 'The craft flourished under the royal patronage of Queen Ahilyabai Holkar in the 18th century.',
      icon: '🏛️'
    },
    {
      title: 'Signature Motifs', 
      description: 'Geometric patterns inspired by the detailing of Maheshwar Fort and temple architecture.',
      icon: '🔷'
    },
    {
      title: 'Reversible Borders',
      description: 'The unique "Bugdi" border design that looks identical on both sides of the fabric.',
      icon: '↔️'
    },
    {
      title: 'Lightweight Texture',
      description: 'A perfect handwoven balance of silk in the warp and cotton in the weft.',
      icon: '✨'
    }
  ];

  // Updated with specific HEX codes for authentic heritage look
  colors = [
    { name: 'Rani (Deep Pink)', code: '#9F1D35' },
    { name: 'Angoori (Grape)', code: '#8A9A5B' },
    { name: 'Madhu (Mustard)', code: '#E3A857' },
    { name: 'Neel (Indigo)', code: '#2B3F5C' },
    { name: 'Tapavan (Rust)', code: '#8B4513' }
  ];

  motifs = [
    { name: 'The Leher', description: 'Zig-zag wave pattern symbolizing the Narmada river currents.' },
    { name: 'The Chatai', description: 'Geometric mat pattern representing woven mats.' },
    { name: 'The Kangi', description: 'Small comb-like serrated patterns on the border.' },
    { name: 'The Temple', description: 'Architectural inspired spire carvings found on the Ghats.' }
  ];
}