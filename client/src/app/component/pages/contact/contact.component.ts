import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Founder & Creative Director',
      email: 'priya@maheshwaritextiles.com',
      image: 'assets/images/priya-sharma.jpg'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Artisan Coordinator',
      email: 'rajesh@maheshwaritextiles.com', 
      image: 'assets/images/rajesh-kumar.jpg'
    },
    {
      name: 'Anita Desai',
      role: 'Customer Relations',
      email: 'anita@maheshwaritextiles.com',
      image: 'assets/images/anita-desai.jpg'
    }
  ];

  contactInfo = {
    address: 'Weavers Colony, Maheshwar, Madhya Pradesh, India - 451224',
    phone: '+91 9876543210',
    email: 'contact@maheshwaritextiles.com',
    hours: 'Monday - Saturday: 9:00 AM - 6:00 PM'
  };

  submitForm() {
    alert('Thank you for your message! We will get back to you soon.');
    // Form submission logic would go here
  }

   teamPhotoUrl = 'assets/images/team.jpg';
}