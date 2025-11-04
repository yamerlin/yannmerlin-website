import { Component } from '@angular/core';
import { ThemeSwitcher } from '../../shared/components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-header-nav',
  imports: [ThemeSwitcher],
  templateUrl: './header-nav.html',
  styleUrl: './header-nav.scss',
})
export class HeaderNav {

  constructor() {}

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
