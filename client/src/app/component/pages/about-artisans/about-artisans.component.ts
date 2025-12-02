import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-artisans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-artisans.component.html',
  styleUrls: ['./about-artisans.component.css']
})
export class AboutArtisansComponent {

  constructor(private router: Router) {
    }
  artisans = [
    {
      name: 'Avesh Khan',
      image: 'assets/images/Artisans/avesh-khan.jpg',

      bio: 'Avesh is a skilled woman artisan from Maheshwar, known for her steady hand and patience at the loom. She recently wove a saree using coarse yarn, a material that demands precision and control, and her work reflects her deep understanding of traditional Maheshwari weaving.Her strength lies in her consistency and dedication, and while she is cautious about change, her craftsmanship carries the quiet confidence of someone who knows her loom intimately.She represents the countless women artisans who ensure the continuity of Maheshwar’s weaving heritage—one careful, committed weave at a time.',
      experience: '25+ years',
      Specialty: 'Working with coarse yarn to create finely balanced textures',
      quote: 'Every thread tells a story of our heritage'
    },
    {
      name: 'Sanjay Pawar', 
      image: 'assets/images/Artisans/sanjay-pawar.jpg',

      bio: 'A talent from Maheshwar — one of the few artisans in the region who works with yarn-dyed Maheshwari sarees. He sources dyed yarn from Bangalore, and then weaves it into sarees with exceptional clarity and depth of colour.Weaving runs in his family; both his mother and father are artisans, and it is from them that he learned the craft and the humility that defines him.He supplies his beautifully crafted sarees to Ashray Handlooms, quietly preserving a technique that few others practice today.',
      experience: '18+ years',
      Specialty: 'Yarn-dyed Maheshwari sarees with exceptional colour depth.',
      quote: 'Weaving is not just a craft, it\'s our identity'
    }
  ];
}