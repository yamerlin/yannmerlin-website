import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  constructor(private themeService: ThemeService) {}
  
  isDarkMode(): boolean {
    return this.themeService.getCurrentTheme() === 'dark';
  }

  toggleTheme() {
    console.log('Toggle theme clicked');

    this.themeService.toggleTheme();
  }
}
