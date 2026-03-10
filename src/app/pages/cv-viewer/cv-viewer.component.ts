import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv-viewer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cv-viewer.component.html',
  styleUrl: './cv-viewer.component.css'
})
export class CvViewerComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly baseUrl = document.baseURI;
  protected readonly pdfPath = new URL('cv.pdf', this.baseUrl).toString();
  protected readonly pdfViewerUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `${this.pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`
  );
}
