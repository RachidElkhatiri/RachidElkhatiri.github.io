import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input({ required: true }) contacts: Contact[] = [];
  private readonly fb = inject(FormBuilder);

  protected readonly contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  protected submitted = false;

  protected submit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    this.contactForm.reset();
    this.submitted = false;
    alert('Message pret a etre envoye. Connecte ce formulaire a EmailJS, Formspree ou ton backend Spring Boot.');
  }
}
