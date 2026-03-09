import { Component, Input } from '@angular/core';
import { RepoHighlight } from '../../models/portfolio.model';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-github-section',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './github-section.component.html',
  styleUrl: './github-section.component.css'
})
export class GithubSectionComponent {
  @Input({ required: true }) githubUsername = '';
  @Input({ required: true }) repos: RepoHighlight[] = [];
}
