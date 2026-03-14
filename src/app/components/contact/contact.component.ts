import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitted = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(event: Event) {
    event.preventDefault();
    // Here you'd hook up a real email service (e.g. EmailJS, Formspree, etc.)
    console.log('Form submitted:', this.formData);
    this.submitted = true;
    this.formData = { name: '', email: '', message: '' };
    setTimeout(() => this.submitted = false, 5000);
  }
}
