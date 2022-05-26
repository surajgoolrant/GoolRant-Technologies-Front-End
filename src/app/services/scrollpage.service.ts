import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollpageService {
  constructor() {}

  scrollPagetoTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
