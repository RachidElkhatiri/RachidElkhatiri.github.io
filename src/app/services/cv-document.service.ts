import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvDocumentService {
  private readonly endpoint = 'CV.pdf';

  constructor(private readonly http: HttpClient) { }

  getCvPdf(): Observable<Blob> {
    return this.http.get(this.endpoint, { responseType: 'blob' });
  }
}
