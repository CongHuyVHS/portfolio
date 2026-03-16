import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  submitted = false;
  sending = false;
  error = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.sending = true;
    this.error = false;

    this.http.post('https://formspree.io/f/xnjgbely', this.formData)
      .subscribe({
        next: () => {
          this.sending = false;
          this.submitted = true;
          this.formData = { name: '', email: '', message: '' };
          setTimeout(() => this.submitted = false, 5000);
        },
        error: () => {
          this.sending = false;
          this.error = true;
        }
      });
  }
}
