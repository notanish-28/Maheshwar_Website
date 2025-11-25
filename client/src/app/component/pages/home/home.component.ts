import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentSlide = 0;
  
  slides = [
    {
      image: 'assets/images/Carousel_3.jpg',
      title: 'Heritage Maheshwari Weaves',
      description: 'Traditional handwoven textiles from the heart of India'
    },
    {
      image: 'assets/images/Carousel_2.jpg',
      title: 'Artisan Crafted Excellence',
      description: 'Each piece tells a story of skill and tradition'
    },
    {
      image: 'assets/images/Carousel_1.jpg',
      title: 'Elegant Reversible Borders',
      description: 'Signature geometric motifs inspired by temple architecture'
    }
  ];

  categories = [
    {
      name: "Men's Wear",
      image: "assets/images/menswear.jpg",
      description: "Elegant kurtas and traditional wear",
      route: "/shop"
    },
    {
      name: "Women's Wear",
      image: "assets/images/womenswear.jpg", 
      description: "Beautiful sarees and dress materials",
      route: "/shop"
    },
    {
      name: "Accessories",
      image: "assets/images/accessories.jpg",
      description: "Stoles, dupattas and more",
      route: "/shop"
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}
