import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input({ required: true }) isDark = false;
  @Output() themeToggle = new EventEmitter<void>();

  protected readonly sections = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'A propos' },
    { id: 'skills', label: 'Competences' },
    { id: 'projects', label: 'Projets' },
    { id: 'experience', label: 'Experience' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' }
  ];

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
