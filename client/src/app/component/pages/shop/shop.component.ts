import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LookbookItem {
  id: number;
  title: string;
  category: 'menswear' | 'womenswear';
  price: string;
  images: string[];
  activeImageIndex: number;
  tags: string[];
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  
  // Updated to include 4 views: Front, Side 1, Side 2, Back
  collection: LookbookItem[] = [
    {
      id: 1,
      title: 'The Asymmetric Vest Set',
      category: 'menswear',
      price: '₹ 4,500',
      images: [
        'assets/images/clothes/men_vest_front.jpeg',
        'assets/images/clothes/men_vest_side1.jpeg',
        'assets/images/clothes/men_vest_side2.jpeg',
        'assets/images/clothes/men_vest_back.jpeg' // Added Back View
      ],
      activeImageIndex: 0,
      tags: ['Structured', 'Cotton']
    },
    {
      id: 2,
      title: 'Emerald Side-Tie Tunic',
      category: 'womenswear',
      price: '₹ 3,800',
      images: [
        'assets/images/clothes/women_green_tunic_front.jpeg',
        'assets/images/clothes/women_green_tunic_side1.jpeg',
        'assets/images/clothes/women_green_tunic_side2.jpeg',
        'assets/images/clothes/women_green_tunic_back.jpeg' // Added Back View
      ],
      activeImageIndex: 0,
      tags: ['Layering', 'Silk Blend']
    },
    {
      id: 3,
      title: 'The Paneled Lounge Set',
      category: 'menswear',
      price: '₹ 4,200',
      images: [
        'assets/images/clothes/men_green_shirt_front.jpeg',
        'assets/images/clothes/men_green_shirt_side1.jpeg',
        'assets/images/clothes/men_green_shirt_side2.jpeg',
        'assets/images/clothes/men_green_shirt_back.jpeg' // Added Back View
      ],
      activeImageIndex: 0,
      tags: ['Relaxed Fit', 'Geometric']
    },
    {
      id: 4,
      title: 'Draped Halter Ensemble',
      category: 'womenswear',
      price: '₹ 5,500',
      images: [
        'assets/images/clothes/women_halter_front.jpeg',
        'assets/images/clothes/women_halter_side1.jpeg',
        'assets/images/clothes/women_halter_side2.jpeg',
        'assets/images/clothes/women_halter_back.jpeg' // Added Back View
      ],
      activeImageIndex: 0,
      tags: ['Evening', 'Drape']
    },
    {
      id: 5,
      title: 'Mulberry Tie-Front Shirt',
      category: 'menswear',
      price: '₹ 3,200',
      images: [
        'assets/images/clothes/men_purple_shirt_front.jpeg',
        'assets/images/clothes/men_purple_shirt_side1.jpeg',
        'assets/images/clothes/men_purple_shirt_side2.jpeg',
        'assets/images/clothes/men_purple_shirt_back.jpeg' // Added Back View
      ],
      activeImageIndex: 0,
      tags: ['Traditional', 'Handloom']
    },
    {
      id: 6,
      title: 'The Bow Detail Mini',
      category: 'womenswear',
      price: '₹ 2,900',
      images: [
        'assets/images/clothes/women_mini_front.jpeg',
        'assets/images/clothes/women_mini_side1.jpeg',
        'assets/images/clothes/women_mini_side2.jpeg',
        'assets/images/clothes/women_mini_back.jpeg' // Added Back View
      ],
      activeImageIndex: 0,
      tags: ['Chic', 'Summer']
    }
  ];

  categories = ['all', 'menswear', 'womenswear'];
  selectedCategory = 'all';
  
  get filteredCollection() {
    return this.selectedCategory === 'all' 
      ? this.collection 
      : this.collection.filter(item => item.category === this.selectedCategory);
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }

  setActiveImage(item: LookbookItem, index: number) {
    item.activeImageIndex = index;
  }
}