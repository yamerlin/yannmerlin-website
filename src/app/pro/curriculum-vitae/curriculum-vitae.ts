import { Component } from '@angular/core';
import { HeaderNav } from '../header-nav/header-nav';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-curriculum-vitae',
  imports: [HeaderNav, Footer],
  templateUrl: './curriculum-vitae.html',
  styleUrl: './curriculum-vitae.scss',
})
export class CurriculumVitae {

}
