import { Component } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-header-nav',
  imports: [],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.scss',
})
export class HeaderNav {

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    console.log('Toggle theme clicked');

    this.themeService.toggleTheme();
  }

  isDarkMode(): boolean {
    return this.themeService.getCurrentTheme() === 'dark';
  }

  toggleMenu() {
    var nav = document.getElementById('nav-list');
    if (nav && nav.style.display === 'flex') {
      nav.style.display = 'none';
    }
    else if (nav) {
      nav.style.display = 'flex';
    }
  }
}
