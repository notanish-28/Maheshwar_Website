import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products = [
    {
      id: 1,
      name: 'Traditional Maheshwari Saree',
      category: 'womenswear',
      price: 4500,
      material: 'Silk Cotton Blend',
      description: 'Handwoven saree with reversible border and leher motif',
      image: 'assets/images/saree1.jpg',
      featured: true
    },
    {
      id: 2,
      name: 'Men\'s Kurta Set',
      category: 'menswear',
      price: 3500,
      material: 'Pure Cotton',
      description: 'Comfortable kurta with traditional geometric patterns',
      image: 'assets/images/kurta1.jpg',
      featured: false
    },
    {
      id: 3,
      name: 'Maheshwari Stole',
      category: 'accessories',
      price: 1200,
      material: 'Silk Cotton',
      description: 'Lightweight stole with temple border design',
      image: 'assets/images/stole1.jpg',
      featured: true
    },
    {
      id: 4,
      name: 'Women\'s Dress Material',
      category: 'womenswear',
      price: 2800,
      material: 'Cotton Silk',
      description: '3-piece dress material with chatai pattern',
      image: 'assets/images/dress-material1.jpg',
      featured: false
    },
    {
      id: 5,
      name: 'Men\'s Jacket',
      category: 'menswear',
      price: 5200,
      material: 'Wool Cotton Blend',
      description: 'Traditional jacket with contemporary design',
      image: 'assets/images/jacket1.jpg',
      featured: true
    },
    {
      id: 6,
      name: 'Maheshwari Dupatta',
      category: 'accessories',
      price: 1800,
      material: 'Pure Silk',
      description: 'Elegant dupatta with kangi motif',
      image: 'assets/images/dupatta1.jpg',
      featured: false
    }
  ];

  categories = ['all', 'menswear', 'womenswear', 'accessories'];
  selectedCategory = 'all';
  filteredProducts = this.products;

  filterProducts(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
  }

  addToCart(product: any) {
    // Implement cart functionality
    alert(`Added ${product.name} to cart!`);
  }
}
