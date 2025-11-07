import { Component, input } from '@angular/core';
import { ThemeSwitcher } from '../../shared/components/theme-switcher/theme-switcher';

@Component({
  selector: 'app-project',
  imports: [ThemeSwitcher],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  title = input.required();
  description = input.required();
  technologies = input.required<string[]>();
}
