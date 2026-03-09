import { Component, Input } from '@angular/core';
import { ProfileData } from '../../models/portfolio.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input({ required: true }) profile!: ProfileData;
  protected readonly year = new Date().getFullYear();
}
