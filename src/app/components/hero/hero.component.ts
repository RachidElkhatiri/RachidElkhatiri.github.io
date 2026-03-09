import { Component, Input } from '@angular/core';
import { ProfileData } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input({ required: true }) profile!: ProfileData;

  protected scrollToProjects(): void {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
