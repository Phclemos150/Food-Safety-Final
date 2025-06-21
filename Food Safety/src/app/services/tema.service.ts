import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemasService {
  private readonly THEME_KEY = 'theme';

  constructor() {}

  toggleTheme() {
    if (this.isDarkTheme()) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  isDarkTheme(): boolean {
    return document.body.classList.contains('dark');
  }

  setDarkTheme() {
    document.body.classList.add('dark');
    localStorage.setItem(this.THEME_KEY, 'dark');
  }

  setLightTheme() {
    document.body.classList.remove('dark');
    localStorage.setItem(this.THEME_KEY, 'light');
  }

  loadTheme() {
    const theme = localStorage.getItem(this.THEME_KEY);
    if (theme === 'dark') {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }
}
